  class ShoppingCart {
    constructor() {
      this.items = [];
      this.add = function (item) {
        if (this.exists(item)) {
          let index = this.items.findIndex(function (o) {
            return o._id === item._id;
          });
          this.items[index].quantity++;
        } else {
          this.items.push({ ...item, quantity: 1 });
        }
        return this.items;
      };

      this.printShoppingCart = function () {
        console.log(`
              items : ${this.items.map((item) => item.name).toString()}
              count : ${this.items.length}
              countItem : ${this.items.reduce(
                (accum, item) => accum + item.quantity,
                0
              )}
              total : ${this.calculateTotal()} €
          `);
      };

      this.exists = function (item) {
        let exists = this.items.some(function (o) {
          return o._id === item._id;
        });
        return exists;
      };

      this.replaceItem = function (item, newItem) {
        let index = this.items.findIndex(function (o) {
          return o._id === item._id;
        });
        this.items.splice(index, 1, { ...newItem, quantity: 1 });
        return this.items;
      };

      this.deleteItem = function (id) {
        let index = this.items.findIndex(function (item) {
          return item.id === id;
        });
        this.items.splice(index, 1);
        console.log(this.items);
      };

      this.increase = function (item) {
        if (this.exists(item)) {
          let index = this.items.findIndex(function (o) {
            return o._id === item._id;
          });
          this.items[index].quantity++;
        }
        return this.items;
      };

      this.decrease = function (item) {
        if (this.exists(item)) {
          let index = this.items.findIndex(function (o) {
            return o._id === item._id;
          });
          let currentItem = this.items[index];
          currentItem.quantity--;
          if (currentItem.quantity === 0) {
            this.deleteItem(currentItem.id);
          }
        }
        return this.items;
      };

      this.calculateTotal = function () {
        return this.items.reduce(
          (accum, item) => accum + item.quantity * item.price,
          0
        );
      };
    }
  } 
