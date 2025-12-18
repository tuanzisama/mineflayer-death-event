class Item {
  private jsonMsg: any;
  constructor(jsonMsg: any) {
    this.jsonMsg = jsonMsg;
  }

  private hoverEvent(): any {
    return this.jsonMsg?.hover_event;
  }

  get id(): string {
    return this.hoverEvent()?.id;
  }

  get amount(): number {
    return this.hoverEvent()?.count;
  }

  get components(): any {
    return this.hoverEvent()?.components;
  }

  toString(): string {
    return `Item{id=${this.id},count=${this.amount},components=${JSON.stringify(this.components)}}`;
  }
}

export { Item };
