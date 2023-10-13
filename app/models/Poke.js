export class Poke {
    constructor(data) {
        this.name = data.name
        this.nickname = data.nickName
        this.img = data.img
        this.weight = data.weight
        this.height = data.height
        this.types = data.types
        this.creatorId = data.creatorId
        this.url = data.url
    }

    get pokesTemplate() {
        return `
        <div class="col-12 mb-3">
        <div class="bg-secondary img-fluid p-3">
          <p class="fw-bold">${this.name}</p>
          
          <a href="${this.url}">${this.url}</a>
        </div>
      </div>
        `
    }
}