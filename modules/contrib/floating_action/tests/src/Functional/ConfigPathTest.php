<?php

namespace Drupal\Tests\floating_action\Functional;

use Drupal\Tests\BrowserTestBase;

/**
 * Tests for the existence of Admin Toolbar tools new links.
 *
 * @group floating_action
 */
class ConfigPathTest extends BrowserTestBase {

  /**
   * Modules to enable.
   *
   * @var array
   */
  protected static $modules = [
    'floating_action',
  ];

  /**
   * {@inheritdoc}
   */
  protected $defaultTheme = 'claro';

  /**
   * A test user with permission to view the administration theme.
   *
   * @var \Drupal\user\UserInterface
   */
  protected $editorUser;

  /**
   * {@inheritdoc}
   */
  protected function setUp(): void {
    parent::setUp();

    // Create and log in an administrative user.
    $this->editorUser = $this->drupalCreateUser([
      'view the administration theme',
      'administer permissions',
    ]);
    $this->drupalLogin($this->editorUser);
    $this->container->get('router.builder')->rebuild();
  }

  /**
   * Tests for the hover of sub menus.
   */
  public function testAccessSettings() {
    $assertsion = $this->assertSession();

    $this->drupalGet('admin/config/floating_action');
    $assertsion->statusCodeEquals(200);
    $assertsion->pageTextContains('The path you would like to apply, separate each path by one line.');

    // Set permission page for floating.
    $page = $this->getSession()->getPage();
    $page->fillField('path', '/admin/people/permissions');
    $page->pressButton('Save configuration');

    // Reload
    $this->drupalGet('admin/config/floating_action');
    $assertsion->pageTextContains('/admin/people/permissions');


    // Float exists in article create
    $this->drupalGet('/admin/people/permissions');
    $assertsion->statusCodeEquals(200);
    $elements = $this->xpath('//form[contains(@class, "float-enabled")]');
    $this->assertNotEmpty($elements);
  }

}
