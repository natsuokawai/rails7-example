import { Controller } from "stimulus"

export default class extends Controller {
  reset() {
    console.log("inside reset")
    this.element.reset()
  }
}
