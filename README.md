# SolidBud — GitHub Pages

Wersja poprawiona: wszystkie główne pliki strony znajdują się bezpośrednio w katalogu głównym repozytorium. Dzięki temu nie ma problemu z dodatkowym folderem `solidbud-demo/` ani ze ścieżką do CSS.

## Pliki
- `index.html`
- `style.css` — główny arkusz stylów, w katalogu głównym
- `i18n.js` — tłumaczenia PL / EN / UA
- `ui.js` — menu, filtry galerii, lightbox i zmiana języka
- `main.js` — formularz i inicjalizacja
- `favicon.svg`

## Publikacja
1. Rozpakuj ZIP.
2. Otwórz repozytorium GitHub i usuń poprzednie pliki strony (albo zastąp je plikami z tego ZIP).
3. Załaduj **zawartość** ZIP bez dodatkowego folderu nadrzędnego. `index.html` i `style.css` muszą być obok siebie на najwyższym уровне репозитория.
4. В Settings → Pages выбери нужную ветку и `/ (root)`.
5. Подожди завершения деплоя и обнови страницу через `Ctrl + F5`.

## Важно перед публикацией
Название SolidBud, телефон, e-mail и фото демонстрационные. Замени их на реальные. Отзывы также демонстрационные. Форма использует `mailto:` и открывает почтовую программу, серверной отправки нет.

Tailwind подключается через CDN, поэтому для отображения его utility-классов требуется интернет. Основной визуальный стиль находится в локальном `style.css`.


## Responsywność
Dodano dodatkowe reguły mobilne dla małych ekranów (w tym 340–420 px), formularza, menu, galerii, FAQ i lightboxa. Po podmianie plików odśwież stronę przez Ctrl+F5.
