
import * as data from "../helpers/default_data.json"

describe('Покупка нового аватара для своего тренера', function () {

   it('Сквозной e2e (end-to-end) автотест для покемонов', function () {
        cy.visit('https://pokemonbattle.ru/'); //Зайти на сайт
        cy.get('#k_email').type(data.user_login); //Ввести верный логин
        cy.get('#k_password').type(data.user_password); //Ввести верный пароль
        cy.get('.MuiButton-root').click(); //Нажать кнопку войти
        cy.wait(3000) // Ждем 3 секунды
        cy.get('.header_card_trainer').click(); // Нажать кнопку тренеры
        cy.wait(3000) // Ждем 3 секунды
        cy.get('.k_mobile > :nth-child(5)').click(); // Нажать кнопку смена аватара
        cy.get(':nth-child(1) > .shop__button').click(); //Нажать кнопку купить 
        cy.wait(3000) // Ждем 3 секунды
        cy.get('.card_number').type(5555555555555599); // Ввести номер карты
        cy.get('.card_date').type(1228); // Ввести срок действия карты
        cy.get('.card_csv').type(125); // Ввести код
        cy.get('.card_name').type('elena grinyak'); // Ввести Имя
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click(); // Нажать кнопку оплатить
        cy.get('.style_1_base_input').type(56456); // Ввести код из пуша или смс
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click(); // Нажать кнопку оплатить
        cy.get('.payment_status_top_title').contains('Покупка прошла успешно'); // Покупка прошла успешно
        cy.get('.style_1_base_link_blue').should('be.visible'); //Элемент виден пользователю
        })
})