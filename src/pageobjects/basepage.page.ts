export default class BasePage {

    get pageName() {
        return $(`//header[@class='oxd-topbar']//h6`);
    }

}