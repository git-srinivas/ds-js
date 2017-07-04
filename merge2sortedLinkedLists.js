
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
  addNode(head,7);
  addNode(head,10);
  addNode(head,20);
  addNode(head,30);

  addNode(head1,11);
  addNode(head1,21);
  addNode(head1,22);
  addNode(head1,23);
  function printAll(head){
     while(head != null){
      console.log(head.data)
        head = head.next;
     }
  }
  function sortAndMerge(a,b){
    var ret  = new List();
    var head2 = ret;
    while (1){
        if(a == null){
          ret.next = b;
          break;
        }
        else if(b == null){
          ret.next = a;
          break;
        }
         if(a.data <= b.data){
          var temp = a;
          a = temp.next;
          temp.next = null;
          ret.next = temp;
        }
        else{
          var temp1 = b;
          b = temp1.next;
          temp1.next = null;
          ret.next = temp1;
        }
        ret = ret.next;
    }
    return head2;
  }
  console.log("head")
  printAll(head);
  console.log("head1")
    printAll(head1);
    console.log("sorted linked list")
    console.log(sortAndMerge(head,head1))
