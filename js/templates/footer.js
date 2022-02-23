class MyFooter extends HTMLElement {
  connectedCallback() {
    // const page = this.getAttribute('current');
    this.innerHTML = `
      <footer>
      </footer>
    `
  }
}

export default MyFooter;