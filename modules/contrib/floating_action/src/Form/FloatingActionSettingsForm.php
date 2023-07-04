<?php

namespace Drupal\floating_action\Form;

use Drupal\Core\Config\ConfigFactoryInterface;
use Drupal\Core\Form\ConfigFormBase;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\Core\Form\FormStateInterface;

/**
 * Provides settings for Floating action module.
 */
class FloatingActionSettingsForm extends ConfigFormBase {

  /**
   * The entity type manager.
   *
   * @var \Drupal\Core\Entity\EntityTypeManagerInterface
   */
  protected $entityTypeManager;

  /**
   * {@inheritdoc}
   */
  public function __construct(
    ConfigFactoryInterface $config_factory) {
    parent::__construct($config_factory);
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container) {
    return new static(
      $container->get('config.factory'),
      $container->get('entity_type.manager')
    );
  }

  /**
   * {@inheritdoc}
   */
  protected function getEditableConfigNames() {
    return ['floating_action.settings'];
  }

  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'floating_action.settings';
  }

  /**
   * Build settings form.
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $config = $this->config('floating_action.settings');
    $form['position'] = [
      '#type' => 'radios',
      '#title' => $this->t('Position'),
      '#options' => [
        'top-left' => $this->t('Top left'),
        'top-center' => $this->t('Top center'),
        'top-right' => $this->t('Top right'),
        'middle-left' => $this->t('Middle left'),
        'middle-right' => $this->t('Middle right'),
        'bottom-left' => $this->t('Bottom left'),
        'bottom-center' => $this->t('Bottom center'),
        'bottom-right' => $this->t('Bottom right'),
      ],
      '#default_value' => $config->get('position') ?? 'top-right',
    ];
    $form['axis_distance'] = [
      '#type' => 'fieldset',
      '#title' => $this->t('Distance from borders(px)'),
    ];
    $form['axis_distance']['horizontal'] = [
      '#type' => 'number',
      '#title' => $this->t('Horizontal'),
      '#min' => 0,
      '#default_value' => $config->get('horizontal') ?? 50,
      '#description' => $this->t('The distance from closest border, X axis'),
    ];
    $form['axis_distance']['vertical'] = [
      '#type' => 'number',
      '#title' => $this->t('Vertical'),
      '#min' => 0,
      '#default_value' => $config->get('vertical') ?? 50,
      '#description' => $this->t('The distance from closest border, Y axis'),
    ];

    $form['applies'] = [
      '#type' => 'fieldset',
      '#title' => $this->t('Applies'),
    ];

    // Apply for node bundles.
    $bundle_info = \Drupal::service('entity_type.bundle.info')->getBundleInfo('node');
    $bundles = [];
    foreach($bundle_info as $bundle => $info) {
      $bundles[$bundle] = $info['label'];
    }
    $form['applies']['bundle'] = [
      '#type' => 'select',
      '#title' => $this->t('Content types'),
      '#options' => $bundles,
      '#multiple' => TRUE,
      '#description' => $this->t('The content types to apply'),
      '#default_value' => $config->get('bundle') ?? '',
    ];

    $form['applies']['path'] = [
      '#type' => 'textarea',
      '#title' => $this->t('Path'),
      '#rows' => 5,
      '#description' => $this->t('The path you would like to apply, separate each path by one line.'),
      '#default_value' => $config->get('path') ? nl2br($config->get('path')) : '',
    ];

    $bundle_info = \Drupal::service('entity_type.bundle.info')->getBundleInfo('node');
    return parent::buildForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  public function validateForm(array &$form, FormStateInterface $form_state) {
    if ($paths = $form_state->getUserInput()['path']) {
      $paths = explode("\r\n", $paths);
      $path_validator = \Drupal::service('path.validator');
      foreach($paths as $path) {
        if(!$path_validator->isValid($path)) {
          $form_state->setErrorByName('path', $this->t('The path you entered is invalid'));
          break;
        }
      }
    }
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    parent::submitForm($form, $form_state);
    $values = $form_state->getUserInput();
    // Remove form system default values.
    unset($values['form_build_id'], $values['form_token'], $values['form_id'], $values['op']);
    $config = $this->config('floating_action.settings');
    foreach ($values as $key => $value) {
      $config->set($key, $value);
    }
    $config->save();
  }

}
