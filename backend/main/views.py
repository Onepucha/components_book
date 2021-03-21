from django.views.generic import TemplateView


class IndexPageView(TemplateView):
    template_name = 'main/index.html'

    def get_template_names(self):
        if user.authorized():
            return [self.template_name]


class ChangeLanguageView(TemplateView):
    template_name = 'main/change_language.html'
