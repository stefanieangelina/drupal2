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

/* modules/contrib/blazy/templates/blazy.html.twig */
class __TwigTemplate_f35d328e6949d809dab02f64e2ea1acbef424df474c12ac8a62ffd0372d13304 extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
            'blazy_player' => [$this, 'block_blazy_player'],
            'blazy_media' => [$this, 'block_blazy_media'],
            'blazy_content' => [$this, 'block_blazy_content'],
            'blazy_caption' => [$this, 'block_blazy_caption'],
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $tags = ["set" => 53, "if" => 67, "block" => 97, "for" => 148];
        $filters = ["clean_class" => 56, "join" => 63, "t" => 71, "escape" => 157];
        $functions = ["create_attribute" => 79];

        try {
            $this->sandbox->checkSecurity(
                ['set', 'if', 'block', 'for'],
                ['clean_class', 'join', 't', 'escape'],
                ['create_attribute']
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
        // line 53
        $context["classes"] = [0 => ((        // line 54
($context["content"] ?? null)) ? ("media--rendered") : ("")), 1 => (($this->getAttribute(        // line 55
($context["settings"] ?? null), "namespace", [])) ? (("media--" . $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["settings"] ?? null), "namespace", [])))) : ("")), 2 => (($this->getAttribute(        // line 56
($context["settings"] ?? null), "media_switch", [])) ? (("media--switch media--switch--" . \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed($this->getAttribute(($context["settings"] ?? null), "media_switch", []))))) : ("")), 3 => (($this->getAttribute($this->getAttribute(        // line 57
($context["blazies"] ?? null), "is", []), "player", [])) ? ("media--player") : ("")), 4 => (($this->getAttribute($this->getAttribute(        // line 58
($context["blazies"] ?? null), "media", []), "bundle", [])) ? (("media--bundle--" . \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute(($context["blazies"] ?? null), "media", []), "bundle", []))))) : ("")), 5 => (($this->getAttribute($this->getAttribute(        // line 59
($context["blazies"] ?? null), "media", []), "type", [])) ? (("media--" . $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute(($context["blazies"] ?? null), "media", []), "type", [])))) : ("")), 6 => (($this->getAttribute($this->getAttribute(        // line 60
($context["blazies"] ?? null), "resimage", []), "id", [])) ? ("media--responsive") : ("")), 7 => (($this->getAttribute(        // line 61
($context["settings"] ?? null), "ratio", [])) ? (("media--ratio media--ratio--" . $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["settings"] ?? null), "ratio", [])))) : ("")), 8 => ((($this->getAttribute(        // line 62
($context["settings"] ?? null), "use_loading", []) || $this->getAttribute($this->getAttribute(($context["blazies"] ?? null), "use", []), "loader", []))) ? ("is-b-loading") : ("")), 9 => (($this->getAttribute(        // line 63
($context["settings"] ?? null), "classes", [])) ? (\Drupal\Component\Utility\Html::getClass(twig_join_filter($this->sandbox->ensureToStringAllowed($this->getAttribute(($context["settings"] ?? null), "classes", [])), " "))) : (""))];
        // line 66
        echo "
";
        // line 67
        if ($this->getAttribute($this->getAttribute(($context["blazies"] ?? null), "is", []), "player", [])) {
            // line 68
            echo "  ";
            $context["attributes"] = $this->getAttribute(($context["attributes"] ?? null), "setAttribute", [0 => "aria-live", 1 => "polite"], "method");
            // line 69
            echo "
  ";
            // line 70
            $context["label"] = $this->getAttribute($this->getAttribute(($context["blazies"] ?? null), "media", []), "label", []);
            // line 71
            echo "  ";
            $context["play_title"] = t("Load and play video.");
            // line 72
            echo "  ";
            $context["close_title"] = t("Stop and close video.");
            // line 73
            echo "
  ";
            // line 74
            if (($context["label"] ?? null)) {
                // line 75
                echo "    ";
                $context["play_title"] = t("Load and play the video \"@label\".", ["@label" => ($context["label"] ?? null)]);
                // line 76
                echo "    ";
                $context["close_title"] = t("Stop and close the video \"@label\".", ["@label" => ($context["label"] ?? null)]);
                // line 77
                echo "  ";
            }
            // line 78
            echo "
  ";
            // line 79
            $context["play_button_attributes"] = $this->env->getExtension('Drupal\Core\Template\TwigExtension')->createAttribute(["aria-label" =>             // line 80
($context["play_title"] ?? null), "class" => [0 => "media__icon", 1 => "media__icon--play"], "data-url" => $this->getAttribute($this->getAttribute(            // line 82
($context["blazies"] ?? null), "media", []), "embed_url", []), "data-iframe-title" =>             // line 83
($context["label"] ?? null), "title" =>             // line 84
($context["play_title"] ?? null), "type" => "button"]);
            // line 87
            echo "
  ";
            // line 88
            $context["close_button_attributes"] = $this->env->getExtension('Drupal\Core\Template\TwigExtension')->createAttribute(["aria-label" =>             // line 89
($context["close_title"] ?? null), "class" => [0 => "media__icon", 1 => "media__icon--close"], "title" =>             // line 91
($context["close_title"] ?? null), "type" => "button"]);
        }
        // line 95
        echo "
";
        // line 96
        ob_start(function () { return ''; });
        // line 97
        echo "  ";
        $this->displayBlock('blazy_player', $context, $blocks);
        $context["player"] = ('' === $tmp = ob_get_clean()) ? '' : new Markup($tmp, $this->env->getCharset());
        // line 106
        echo "
";
        // line 107
        ob_start(function () { return ''; });
        // line 108
        echo "  ";
        $this->displayBlock('blazy_media', $context, $blocks);
        $context["media"] = ('' === $tmp = ob_get_clean()) ? '' : new Markup($tmp, $this->env->getCharset());
        // line 124
        echo "
";
        // line 125
        ob_start(function () { return ''; });
        // line 126
        echo "  ";
        $this->displayBlock('blazy_content', $context, $blocks);
        // line 143
        echo "
  ";
        // line 144
        if ((($context["captions"] ?? null) && $this->getAttribute(($context["captions"] ?? null), "inline", [], "any", true, true))) {
            // line 145
            echo "    ";
            $this->displayBlock('blazy_caption', $context, $blocks);
            // line 155
            echo "  ";
        }
        // line 157
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["postscript"] ?? null)), "html", null, true);
        $context["blazy"] = ('' === $tmp = ob_get_clean()) ? '' : new Markup($tmp, $this->env->getCharset());
        // line 160
        echo "
";
        // line 161
        if (($context["wrapper_attributes"] ?? null)) {
            // line 162
            echo "  <div";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["wrapper_attributes"] ?? null)), "html", null, true);
            echo ">";
            // line 163
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["blazy"] ?? null)), "html", null, true);
            // line 164
            echo "</div>
";
        } else {
            // line 166
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["blazy"] ?? null)), "html", null, true);
            echo "
";
        }
    }

    // line 97
    public function block_blazy_player($context, array $blocks = [])
    {
        // line 98
        echo "    ";
        if ($this->getAttribute($this->getAttribute(($context["blazies"] ?? null), "is", []), "player", [])) {
            // line 99
            echo "      <button";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["close_button_attributes"] ?? null)), "html", null, true);
            echo "></button>
      <button";
            // line 100
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["play_button_attributes"] ?? null)), "html", null, true);
            echo "></button>
    ";
        } else {
            // line 102
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["iframe"] ?? null)), "html", null, true);
        }
        // line 104
        echo "  ";
    }

    // line 108
    public function block_blazy_media($context, array $blocks = [])
    {
        // line 109
        echo "    <div";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["attributes"] ?? null), "addClass", [0 => ($context["classes"] ?? null)], "method")), "html", null, true);
        echo ">";
        // line 110
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["preface"] ?? null)), "html", null, true);
        // line 111
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["content"] ?? null)), "html", null, true);
        // line 112
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["image"] ?? null)), "html", null, true);
        // line 114
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["noscript"] ?? null)), "html", null, true);
        // line 115
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["overlay"] ?? null)), "html", null, true);
        // line 116
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["player"] ?? null)), "html", null, true);
        // line 119
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["settings"] ?? null), "icon", [])), "html", null, true);
        // line 120
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["icon"] ?? null)), "html", null, true);
        // line 121
        echo "</div>
  ";
    }

    // line 126
    public function block_blazy_content($context, array $blocks = [])
    {
        // line 127
        echo "    ";
        if (($context["media_attributes"] ?? null)) {
            echo "<div";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["media_attributes"] ?? null)), "html", null, true);
            echo ">";
        }
        // line 128
        echo "      ";
        if ((($context["url"] ?? null) &&  !$this->getAttribute($this->getAttribute(($context["blazies"] ?? null), "is", []), "player", []))) {
            // line 129
            echo "        <a href=\"";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["url"] ?? null)), "html", null, true);
            echo "\"";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["url_attributes"] ?? null)), "html", null, true);
            echo ">";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["media"] ?? null)), "html", null, true);
            echo "</a>

        ";
            // line 132
            echo "        ";
            if ((($context["captions"] ?? null) &&  !twig_test_empty($this->getAttribute(($context["captions"] ?? null), "lightbox", [])))) {
                // line 133
                echo "          <div class=\"litebox-caption visually-hidden\">";
                // line 134
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["captions"] ?? null), "lightbox", [])), "html", null, true);
                // line 135
                echo "</div>
        ";
            }
            // line 137
            echo "
      ";
        } else {
            // line 139
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["media"] ?? null)), "html", null, true);
        }
        // line 141
        echo "    ";
        if (($context["media_attributes"] ?? null)) {
            echo "</div>";
        }
        // line 142
        echo "  ";
    }

    // line 145
    public function block_blazy_caption($context, array $blocks = [])
    {
        // line 146
        echo "      ";
        $context["caption_tag"] = $this->getAttribute(($context["captions"] ?? null), "tag", []);
        // line 147
        echo "      <";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["caption_tag"] ?? null)), "html", null, true);
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["caption_attributes"] ?? null)), "html", null, true);
        echo ">
        ";
        // line 148
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable($this->getAttribute(($context["captions"] ?? null), "inline", []));
        foreach ($context['_seq'] as $context["_key"] => $context["caption"]) {
            // line 149
            echo "          ";
            if ($this->getAttribute($context["caption"], "content", [])) {
                // line 150
                echo "            <";
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($context["caption"], "tag", [])), "html", null, true);
                echo " ";
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($context["caption"], "attributes", [])), "html", null, true);
                echo ">";
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($context["caption"], "content", [])), "html", null, true);
                echo "</";
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($context["caption"], "tag", [])), "html", null, true);
                echo ">
          ";
            }
            // line 152
            echo "        ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['caption'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 153
        echo "      </";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["caption_tag"] ?? null)), "html", null, true);
        echo ">
    ";
    }

    public function getTemplateName()
    {
        return "modules/contrib/blazy/templates/blazy.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  321 => 153,  315 => 152,  303 => 150,  300 => 149,  296 => 148,  290 => 147,  287 => 146,  284 => 145,  280 => 142,  275 => 141,  272 => 139,  268 => 137,  264 => 135,  262 => 134,  260 => 133,  257 => 132,  247 => 129,  244 => 128,  237 => 127,  234 => 126,  229 => 121,  227 => 120,  225 => 119,  223 => 116,  221 => 115,  219 => 114,  217 => 112,  215 => 111,  213 => 110,  209 => 109,  206 => 108,  202 => 104,  199 => 102,  194 => 100,  189 => 99,  186 => 98,  183 => 97,  176 => 166,  172 => 164,  170 => 163,  166 => 162,  164 => 161,  161 => 160,  158 => 157,  155 => 155,  152 => 145,  150 => 144,  147 => 143,  144 => 126,  142 => 125,  139 => 124,  135 => 108,  133 => 107,  130 => 106,  126 => 97,  124 => 96,  121 => 95,  118 => 91,  117 => 89,  116 => 88,  113 => 87,  111 => 84,  110 => 83,  109 => 82,  108 => 80,  107 => 79,  104 => 78,  101 => 77,  98 => 76,  95 => 75,  93 => 74,  90 => 73,  87 => 72,  84 => 71,  82 => 70,  79 => 69,  76 => 68,  74 => 67,  71 => 66,  69 => 63,  68 => 62,  67 => 61,  66 => 60,  65 => 59,  64 => 58,  63 => 57,  62 => 56,  61 => 55,  60 => 54,  59 => 53,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "modules/contrib/blazy/templates/blazy.html.twig", "C:\\xampp\\htdocs\\drupal\\drupal2\\modules\\contrib\\blazy\\templates\\blazy.html.twig");
    }
}
