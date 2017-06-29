
  function List(data){
    this.data = data;
    this.next = null;
  }
  var head = new List(5);
  var head1 = new List(6);
  function addNode(head,newNode){
    var tempNode =  new List(newNode);
    while(head.next != null)
      head = head.next;
    head.next = tempNode;
  }
  addNode(head,10);
  addNode(head,2);
  addNode(head,5);
  addNode(head,8);

  addNode(head1,5);
  addNode(head1,11);
  addNode(head1,13);
  addNode(head1,15);
  function printAll(head){
     while(head != null){
      console.log(head.data)
        head = head.next;
     }
  }
  console.log("head")
  printAll(head);
  console.log("head1")
    printAll(head1);
