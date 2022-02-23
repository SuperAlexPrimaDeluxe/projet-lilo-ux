class MyHeader extends HTMLElement {
  connectedCallback() {
    const current = this.getAttribute('current'); 
    this.innerHTML = `
      <header>
        <img src="" alt="">
        <nav>
          <ul>
            <li class="${current === 'home' ? 'active' : ''}"><a href="index.html">Accueil</a></li>
            <li class="${current === 'contact' ? 'active' : ''}"><a href="contact.html">Contact</a></li>
            <li class="${current === 'shop' ? 'active' : ''}"><a href="shop.html">Boutique</a></li>
          </ul>
        </nav>
      </header>
    `
  }
}

export default MyHeader;