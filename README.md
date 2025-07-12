<h2>UI Автотесты на фреймворке Cypress</h2>

## Описание проекта и задачи
Автоматизировать часть проверок регресса с помощью Cypress

## Тест-кейсы, которые автоматизировали
* Авторизация с верным паролем и верным логином
* Проверка флоу восстановления пароля
* Авторизация c верным логином и неверным паролем
* Авторизация c неверным логином и верным паролем
* Проверка работы валиадации на наличие @ в логине

## Детали реализации

1. baseUrl вынесен в переменные конфига
![image](https://raw.githubusercontent.com/German-D/new_cypress/main/static/baseUrl.png)

2. Применение хуков beforeEach и afterEach
![image](https://raw.githubusercontent.com/German-D/new_cypress/main/static/hooks.png)

3. Переменные данные для авторизации вынесены в отдельный файл
![image](https://raw.githubusercontent.com/German-D/new_cypress/main/static/user_data.png)

4. Каждая страница описана в формате объекта с локаторами
![image](https://raw.githubusercontent.com/German-D/new_cypress/main/static/locators.png)

## Автор

Елена Гриняк ([@elena_grinyak](https://t.me/elena_grinyak))
