<?php

namespace Drupal\Tests\floating_action\Functional;

use Drupal\Tests\BrowserTestBase;

/**
 * Tests for the existence of Admin Toolbar tools new links.
 *
 * @group floating_action
 */
class ConfigContentTypeTest extends BrowserTestBase {

  /**
   * Modules to enable.
   *
   * @var array
   */
  protected static $modules = [
    'node',
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

    // Create an article content type that we will use for testing.
    $type = $this->container->get('entity_type.manager')->getStorage('node_type')
    ->create([
      'type' => 'article',
      'name' => 'Article',
    ]);
    $type->save();

    // Create and log in an administrative user.
    $this->editorUser = $this->drupalCreateUser([
      'view the administration theme',
      'create article content',
    ]);
    $this->drupalLogin($this->editorUser);
    $this->container->get('router.builder')->rebuild();
  }

  /**
   * Asserts that a select element has the correct options.
   *
   * @param string $id
   *   The HTML ID of the select element.
   * @param array $expected_options
   *   An array of option values.
   * @param string $selected
   *   The value of the selected option.
   *
   * @internal
   */
  protected function assertOptions(string $id, array $expected_options, string $selected): void {
    $select = $this->assertSession()->selectExists($id);
    $found_options = $select->findAll('css', 'option');
    $found_options = array_map(function ($item) {
      return $item->getValue();
    }, $found_options);
    $this->assertEqualsCanonicalizing($expected_options, $found_options);
    $this->assertTrue($this->assertSession()->optionExists($id, $selected)->isSelected());
  }


  /**
   * Tests for the hover of sub menus.
   */
  public function testAccessSettings() {
    $assertsion = $this->assertSession();

    $this->drupalGet('admin/config/floating_action');
    $assertsion->statusCodeEquals(200);
    $assertsion->pageTextContains('The content types to apply');

    // Set article to apply the floating.
    $page = $this->getSession()->getPage();
    $page->selectFieldOption('bundle[]', 'article');
    $page->pressButton('Save configuration');

    // Reload
    $this->drupalGet('admin/config/floating_action');
    $this->assertOptions('edit-bundle', ['article'], 'article');

    // Float exists in article create
    $this->drupalGet('/node/add/article');
    $assertsion->statusCodeEquals(200);
    $elements = $this->xpath('//form[contains(@class, "float-enabled")]');
    $this->assertNotEmpty($elements);
  }

}
