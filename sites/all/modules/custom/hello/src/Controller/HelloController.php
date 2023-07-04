<?php

    namespace Drupal\hello\Controller;
    use Drupal\Core\Controller\ControllerBase;

    /**
     * Defines HelloWorldController class.
     */
    class HelloController extends ControllerBase {
        /**
         * Display the markup.
         *
         * @return array
         *   Return markup array.
         */
        public function content() {
            return [
                '#type' => 'markup',
                '#markup' => $this->t('Hello, World!'),
            ];
        }

        public function welcome() {

            $body = "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularized in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
                like Aldus PageMaker including versions of Lorem Ipsum.";

            // return [
            //     '#theme' => 'welcome_body',
            //     '#body' => $body,
                // '#attached' => [
                //     'library' => [
                //         'hello_module/custom',
                //     ],
                // ]
            // ];
                
            return [
                '#type' => 'markup',
                '#markup' => $this->t($body),
            ];
        }
    }
?>