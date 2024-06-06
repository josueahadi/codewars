class PaginationHelper {
    constructor(collection, itemsPerPage) {
      this.collection = collection;
      this.itemsPerPage = itemsPerPage;
    }
  
    itemCount() {
      // Returns the number of items within the entire collection
      return this.collection.length;
    }
  
    pageCount() {
      // Returns the number of pages
      return Math.ceil(this.collection.length / this.itemsPerPage);
    }
  
    pageItemCount(pageIndex) {
      // Returns the number of items on the current page. pageIndex is zero based.
      // This method should return -1 for pageIndex values that are out of range
      if (pageIndex < 0 || pageIndex >= this.pageCount()) {
        return -1;
      }
      if (pageIndex === this.pageCount() - 1) {
        return this.collection.length % this.itemsPerPage || this.itemsPerPage;
      }
      return this.itemsPerPage;
    }
  
    pageIndex(itemIndex) {
      // Determines what page an item is on. Zero based indexes
      // This method should return -1 for itemIndex values that are out of range
      if (itemIndex < 0 || itemIndex >= this.itemCount()) {
        return -1;
      }
      return Math.floor(itemIndex / this.itemsPerPage);
    }
  }
  
  // Sample tests
  var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
  helper.pageCount(); // should == 2
  helper.itemCount(); // should == 6
  helper.pageItemCount(0); // should == 4
  helper.pageItemCount(1); // last page - should == 2
  helper.pageItemCount(2); // should == -1 since the page is invalid
  
  // pageIndex takes an item index and returns the page that it belongs on
  helper.pageIndex(5); // should == 1 (zero based index)
  helper.pageIndex(2); // should == 0
  helper.pageIndex(20); // should == -1
  helper.pageIndex(-10); // should == -1
  
  
  
  
  
  
  
  
  
  