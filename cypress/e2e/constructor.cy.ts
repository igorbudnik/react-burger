describe("drag item", function () {
  before("open web", function () {
    cy.visit("http://localhost:3000");
    cy.intercept("GET", "https://norma.nomoreparties.space/api/auth/user", {
      fixture: "user.json",
    });
    cy.intercept("POST", "https://norma.nomoreparties.space/api/orders", {
      fixture: "order.json",
    }).as("postOrder");

    // Устанавливаем токены:
    window.localStorage.setItem(
      "refreshToken",
      JSON.stringify("test-refreshToken")
    );
    window.localStorage.setItem(
      "accessToken",
      JSON.stringify("test-accessToken")
    );
  });

  it("drag and drop", function () {
    cy.get("[class^=start_drag_643d69a5c3f7b9001cfa093c]").trigger("dragstart");
    cy.get("[class^=drop_item]").trigger("drop");

    cy.get("[class^=start_drag_643d69a5c3f7b9001cfa0940]").trigger("dragstart");
    cy.get("[class^=drop_item]").trigger("drop");

    cy.get("[class^=start_drag_643d69a5c3f7b9001cfa0944]").trigger("dragstart");
    cy.get("[class^=drop_item]").trigger("drop");

    cy.get("[class^=start_drag_643d69a5c3f7b9001cfa0944]").click();
    cy.get("[class^=close_icon]").click();

    cy.get("[class^=order_button]").first().as("orderButton");
    cy.get("@orderButton").should("contain", "Оформить заказ");

    cy.get("@orderButton").click();
    cy.get("[data-testid=order-number]").contains("123").should("exist");
    cy.get("[class^=close_icon]").click();
  });
});
