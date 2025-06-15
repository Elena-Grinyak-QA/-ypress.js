import * as main_page from "../locators/main_page.json";
import * as recovery_password_page from "../locators/recovery_password_page.json"
import * as result_page from "../locators/result_page.json"

describe('Проверка авторизации', function () {

   beforeEach('Начало теста', function () {
         cy.visit('/');
           });

   afterEach('Конец теста', function () {
         cy.get(result_page.close).should('be.visible');
        });

   it('Верный логин и верный пароль', function () {
        cy.get(main_page.email).type('german@dolnikov.ru'); //Ввести верный логин
        cy.get(main_page.password).type('iLoveqastudio1'); //Ввести верный пароль
        cy.get(main_page.login_button).click(); //Нажать кнопку войти
        cy.get(result_page.title).should('be.visible'); //Элемент виден пользователю
        cy.get(result_page.title).contains('Авторизация прошла успешно'); //Авторизация прошла успешно
        });

    it('Восстановление пароля', function () {
        cy.get(main_page.fogot_pass_btn).click(); //Нажать кнопку забыли пароль
        cy.get(recovery_password_page.email).type('elena-grinyak@mail.ru'); //Ввести валидный имейл
        cy.get(recovery_password_page.send_button).click(); //Нажать кнопку отправить код
        cy.get(result_page.title).should('be.visible'); //Элемент виден пользователю
        cy.get(result_page.title).contains('Успешно отправили пароль на e-mail');
        })

     it('Верный логин и НЕверный пароль', function () {
        cy.get(main_page.email).type('german@dolnikov.ru'); //Ввести верный логин
        cy.get(main_page.password).type('iLoveqastudio2'); //Ввести НЕверный пароль
        cy.get(main_page.login_button).click(); //Нажать кнопку войти
        cy.get(result_page.title).should('be.visible'); //Элемент виден пользователю
        cy.get(result_page.title).contains('Такого логина или пароля нет'); //Авторизация не успешна
        })

        it('НЕверный логин и верный пароль', function () {
        cy.get(main_page.email).type('german@dolnikovru'); //Ввести НЕверный логин
        cy.get(main_page.password).type('iLoveqastudio1'); //Ввести верный пароль
        cy.get(main_page.login_button).click(); //Нажать кнопку войти
        cy.get(result_page.title).should('be.visible'); //Элемент виден пользователю
        cy.get(result_page.title).contains('Нужно исправить проблему валидации'); //Авторизация не успешна
        })

        it('Ввести логин без @', function () {
        cy.get(main_page.email).type('germandolnikov.ru'); //Ввести логин без @
        cy.get(main_page.password).type('iLoveqastudio1'); //Ввести верный пароль
        cy.get(main_page.login_button).click(); //Нажать кнопку войти
        cy.get(result_page.title).should('be.visible'); //Элемент виден пользователю
        cy.get(result_page.title).contains('Нужно исправить проблему валидации'); //Авторизация не успешна
        })

        it('Чувствительность к регистру', function () {
        cy.get(main_page.email).type('GerMan@Dolnikov.ru'); //Ввести логин без @
        cy.get(main_page.password).type('iLoveqastudio1'); //Ввести верный пароль
        cy.get(main_page.login_button).click(); //Нажать кнопку войти
        cy.get(result_page.title).should('be.visible'); //Элемент виден пользователю
        cy.get(result_page.title).contains('Авторизация прошла успешно'); //Авторизация прошла успешно
        })
})