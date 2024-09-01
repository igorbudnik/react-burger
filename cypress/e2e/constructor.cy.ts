export const testUrl = "http://localhost:3000";

describe("drag item", function () {
  before("open web", function () {
    cy.visit(testUrl);
    cy.intercept("GET", "api/auth/user", {
      fixture: "user.json",
    });
    cy.intercept("POST", "api/orders", {
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
    cy.get("[class^=drop_item]").as("dropPlace");

    cy.get("[class^=start_drag_643d69a5c3f7b9001cfa093c]").trigger("dragstart");
    cy.get("@dropPlace").trigger("drop");

    cy.get("[class^=start_drag_643d69a5c3f7b9001cfa0940]").trigger("dragstart");
    cy.get("@dropPlace").trigger("drop");

    cy.get("[class^=start_drag_643d69a5c3f7b9001cfa0944]").trigger("dragstart");
    cy.get("@dropPlace").trigger("drop");

    cy.get("[class^=start_drag_643d69a5c3f7b9001cfa0944]").click();
    cy.get("[class^=close_icon]").click();

    cy.get("[class^=order_button]").first().as("orderButton");
    cy.get("@orderButton").should("contain", "Оформить заказ");

    cy.get("@orderButton").click();
    cy.get("[data-testid=order-number]").contains("123").should("exist");
    cy.get("[class^=close_icon]").click();
  });
});
