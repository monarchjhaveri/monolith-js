const uuid = require('uuid/v4');

export default class MainCore {
  private iFrame;
  private definition: Array<any> = [];

  addComponent(definition) {
    definition.moId = uuid();
    this.definition.push(definition);
    this.updateApp();
  }

  componentClicked({moId}) {
    const component = this.definition.find(item => {
      if (item.moId === moId) return true;
    });

    if (!component) return;

    const newText = window.prompt("What would you like the text to be?", component.properties.text);
    if (newText !== component.properties.text) {
      component.properties.text = newText;
      this.updateApp();
    }
  }

  updateApp() {
    this.iFrame.contentWindow.postMessage({
      type: 'UPDATE_APP',
      payload: this.definition
    }, '*');
  }

  retarget(iFrame) {
    this.iFrame = iFrame;
    this.updateApp();
  }
}