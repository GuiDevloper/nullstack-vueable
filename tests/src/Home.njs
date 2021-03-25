import Nullstack from 'nullstack';
import Logo from 'nullstack/logo';

class Home extends Nullstack {

  prepare({ project, page }) {
    page.title = `${project.name} - Nulla-chan te dá as boas vindas!`;
    page.description = `${project.name} foi feito com Nullstack`;
    page.locale = 'pt-BR';
  }

  array = [25, 1, {data: {data2: 10}}, {data: {data2: 20}}];
  renderVFor() {
    return (
      <div>
        <span v-for={'item in ' + JSON.stringify(this.array)}>
          item.data.data2
        </span>
        <button onclick={{array: [...this.array, ...this.array]}}>
          Double array
        </button>
      </div>
    )
  }

  showTitle = true;
  renderVif() {
    return (
      <div>
        <h1
          v-if="showTitle"
          source={this}
        >
          Element to be hidden
        </h1>
        <button
          onclick={{showTitle: !this.showTitle}}
        >
          Toggle title
        </button>
      </div>
    )
  }

  boldTitle() {
    return `<b>${this.title}</b>`;
  }
  renderVhtml() {
    return (
      <h1
        v-html="boldTitle"
        source={this}
      ></h1>
    )
  }

  title = 'Nullstack';
  renderVModel() {
    return (
      <>
        <label for="input-model">v-model:</label>
        <input
          type="text"
          v-model="title"
          source={this}
          label="test"
          id="input-model"
        />
      </>
    )
  }

  render() {
    return (
      <>
        <div class="nullstack-logo">
          <Logo light />
        </div>
        <Vif/>
        <Vhtml/>
        <VModel/>
        <VFor/>
      </>
    )
  }

}

export default Home;