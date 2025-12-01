#!/bin/bash

# ═══════════════════════════════════════════════════════════════
# АВТОМАТИЧЕСКОЕ ДОБАВЛЕНИЕ НОВОЙ СТРАНИЦЫ
# ═══════════════════════════════════════════════════════════════
# Использование: ./add-page.sh название-папки
# Пример: ./add-page.sh strategy
# ═══════════════════════════════════════════════════════════════

set -e  # Остановка при ошибке

# Цвета для красивого вывода
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
PURPLE='\033[0;35m'
NC='\033[0m' # No Color

echo ""
echo "═══════════════════════════════════════════════════════════════"
echo "  📄 ДОБАВЛЕНИЕ НОВОЙ СТРАНИЦЫ НА САЙТ"
echo "═══════════════════════════════════════════════════════════════"
echo ""

# Проверка аргумента
if [ $# -eq 0 ]; then
    echo -e "${RED}❌ Ошибка: не указано название страницы!${NC}"
    echo ""
    echo "Использование:"
    echo "  ./add-page.sh название-папки"
    echo ""
    echo "Примеры:"
    echo "  ./add-page.sh strategy       - создаст страницу /strategy"
    echo "  ./add-page.sh services       - создаст страницу /services"
    echo "  ./add-page.sh contacts       - создаст страницу /contacts"
    echo ""
    exit 1
fi

page_name="$1"

# Переход в папку проекта
cd ~/Desktop/vasechka-site || {
    echo -e "${RED}❌ Ошибка: папка vasechka-site не найдена!${NC}"
    exit 1
}

echo -e "${BLUE}📂 Рабочая папка: ~/Desktop/vasechka-site${NC}"
echo -e "${PURPLE}📄 Создаем страницу: /${page_name}${NC}"
echo ""

# Проверка существования папки
if [ -d "$page_name" ]; then
    echo -e "${YELLOW}⚠️  Папка ${page_name}/ уже существует!${NC}"
    read -p "Перезаписать? (y/n): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo -e "${RED}❌ Отменено${NC}"
        exit 1
    fi
else
    echo -e "${BLUE}📁 Создаю папку ${page_name}/${NC}"
    mkdir -p "$page_name"
fi

# Поиск последнего скачанного HTML файла
echo -e "${YELLOW}🔍 Ищу последний скачанный файл...${NC}"

# Ищем файлы по разным паттернам
latest_file=""

# Ищем файлы содержащие название страницы
matching_file=$(ls -t ~/Downloads/*${page_name}*.html 2>/dev/null | head -1)
if [ -n "$matching_file" ]; then
    latest_file="$matching_file"
fi

# Если не нашли - ищем любой последний index или strategy файл
if [ -z "$latest_file" ]; then
    latest_file=$(ls -t ~/Downloads/*.html 2>/dev/null | head -1)
fi

if [ -z "$latest_file" ]; then
    echo -e "${RED}❌ Не найдено HTML файлов в Downloads!${NC}"
    echo ""
    echo "Что делать:"
    echo "1. Скачай файл который дал Claude"
    echo "2. Убедись что он в папке ~/Downloads/"
    echo "3. Запусти скрипт снова"
    exit 1
fi

echo -e "${GREEN}✅ Найден: $(basename "$latest_file")${NC}"
echo ""

# Копирование файла
echo -e "${BLUE}📄 Копирую в ${page_name}/index.html...${NC}"
cp "$latest_file" "${page_name}/index.html"

# Git команды
echo -e "${BLUE}📦 Добавляю в Git...${NC}"
git add "${page_name}/"

echo -e "${BLUE}💾 Создаю коммит...${NC}"
commit_message="Добавил страницу /${page_name}"
git commit -m "$commit_message"

echo -e "${BLUE}🚀 Загружаю на GitHub...${NC}"
git push

echo ""
echo "═══════════════════════════════════════════════════════════════"
echo -e "  ${GREEN}✅ СТРАНИЦА УСПЕШНО ДОБАВЛЕНА!${NC}"
echo "═══════════════════════════════════════════════════════════════"
echo ""
echo -e "${YELLOW}⏰ Подожди 10-15 секунд для срабатывания автодеплоя${NC}"
echo ""
echo -e "${GREEN}🌐 Новая страница будет доступна по адресу:${NC}"
echo -e "${BLUE}   https://ck601554.tw1.ru/${page_name}${NC}"
echo ""
echo -e "${PURPLE}💡 Совет: добавь ссылку на эту страницу в меню навигации!${NC}"
echo ""
