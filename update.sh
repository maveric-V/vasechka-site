#!/bin/bash
SOURCE_FILE=$1
TARGET_DIR=$2

if [ -z "$SOURCE_FILE" ] || [ -z "$TARGET_DIR" ]; then
    echo "❌ Использование: ./update.sh <путь_к_файлу> <целевая_директория>"
    exit 1
fi

if [ ! -f "$SOURCE_FILE" ]; then
    echo "❌ Файл не найден: $SOURCE_FILE"
    exit 1
fi

if [ "$TARGET_DIR" = "." ]; then
    cp "$SOURCE_FILE" index.html
    echo "✅ Файл скопирован в index.html"
    git add index.html
else
    mkdir -p "$TARGET_DIR"
    cp "$SOURCE_FILE" "$TARGET_DIR/index.html"
    echo "✅ Файл скопирован в $TARGET_DIR/index.html"
    git add "$TARGET_DIR/index.html"
fi

git commit -m "Обновление страницы $(date '+%Y-%m-%d %H:%M')"
git push
echo "🚀 Деплой завершен!"
