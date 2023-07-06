<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* modules/contrib/tb_megamenu/templates/tb-megamenu-item.html.twig */
class __TwigTemplate_2c4540c336f5b4487a214ad6a81e4fdb8e5774ec0339de7f13c9453e4416c82a extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $tags = ["set" => 1, "if" => 2];
        $filters = ["escape" => 11];
        $functions = [];

        try {
            $this->sandbox->checkSecurity(
                ['set', 'if'],
                ['escape'],
                []
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->getSourceContext());

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        // line 1
        $context["linkAttributes"] = $this->getAttribute(($context["link"] ?? null), "attributes", [], "array");
        // line 2
        if (($this->getAttribute(($context["link"] ?? null), "url", [], "array", true, true) &&  !twig_test_empty($this->getAttribute(($context["link"] ?? null), "url", [], "array")))) {
            // line 3
            echo "  ";
            $context["tag"] = "a";
        } else {
            // line 5
            echo "  ";
            $context["tag"] = "span";
            // line 6
            echo "  ";
            $context["linkAttributes"] = $this->getAttribute($this->getAttribute(($context["linkAttributes"] ?? null), "addClass", [0 => "tb-megamenu-no-link"], "method"), "setAttribute", [0 => "tabindex", 1 => "0"], "method");
            // line 7
            echo "  ";
            if (twig_test_empty(($context["submenu"] ?? null))) {
                // line 8
                echo "    ";
                $context["linkAttributes"] = $this->getAttribute(($context["linkAttributes"] ?? null), "addClass", [0 => "tb-megamenu-no-submenu"], "method");
                // line 9
                echo "  ";
            }
        }
        // line 11
        echo "<li ";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["attributes"] ?? null)), "html", null, true);
        echo " >
  ";
        // line 12
        if ((($context["tag"] ?? null) == "a")) {
            // line 13
            echo "    <";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["tag"] ?? null)), "html", null, true);
            echo " href=\"";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["link"] ?? null), "url", [], "array")), "html", null, true);
            echo "\" ";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["link"] ?? null), "attributes", [], "array")), "html", null, true);
            echo ">
  ";
        } else {
            // line 15
            echo "    <";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["tag"] ?? null)), "html", null, true);
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["link"] ?? null), "attributes", [], "array")), "html", null, true);
            echo ">
  ";
        }
        // line 17
        echo "    ";
        if ($this->getAttribute(($context["item_config"] ?? null), "xicon", [], "array")) {
            // line 18
            echo "      <i class=\"";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["item_config"] ?? null), "xicon", [], "array")), "html", null, true);
            echo "\"></i>
    ";
        }
        // line 20
        echo "    ";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["link"] ?? null), "title_translate", [])), "html", null, true);
        echo "
    ";
        // line 21
        if ((($context["submenu"] ?? null) && $this->getAttribute(($context["block_config"] ?? null), "auto-arrow", [], "array"))) {
            // line 22
            echo "      <span class=\"caret\"></span>
    ";
        }
        // line 24
        echo "    ";
        if ($this->getAttribute(($context["item_config"] ?? null), "caption", [], "array")) {
            // line 25
            echo "      <span class=\"mega-caption\">";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["item_config"] ?? null), "caption", [], "array")), "html", null, true);
            echo "</span>
    ";
        }
        // line 27
        echo "  </";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["tag"] ?? null)), "html", null, true);
        echo ">
  ";
        // line 28
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["submenu"] ?? null)), "html", null, true);
        echo "
</li>
";
    }

    public function getTemplateName()
    {
        return "modules/contrib/tb_megamenu/templates/tb-megamenu-item.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  137 => 28,  132 => 27,  126 => 25,  123 => 24,  119 => 22,  117 => 21,  112 => 20,  106 => 18,  103 => 17,  96 => 15,  86 => 13,  84 => 12,  79 => 11,  75 => 9,  72 => 8,  69 => 7,  66 => 6,  63 => 5,  59 => 3,  57 => 2,  55 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "modules/contrib/tb_megamenu/templates/tb-megamenu-item.html.twig", "C:\\xampp\\htdocs\\drupal\\drupal2\\modules\\contrib\\tb_megamenu\\templates\\tb-megamenu-item.html.twig");
    }
}
