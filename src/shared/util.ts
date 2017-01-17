//javascipt 基础算法
export let Util = (string: any) => {
    //选择排序：一个与后面每个比较，小的换过来
    function choose(a) {
        let length = a.length;
        for (let i = 0; i < length; i++) {
            for (let j = length - 1; j > i; j--) {
                if (a[j] < a[i]) {
                    let c = a[j];
                    a[j] = a[i];
                    a[i] = c;
                }
            }
        }
        return a;
    }

    //冒泡排序：相邻两个比较，小的推到最前面
    function pop(a) {
        let length = a.length;
        for (let i = 0; i < length; i++) {
            for (let j = length - 1; j > i; j--) {
                if (a[j] < a[j - 1]) {
                    let c = a[j];
                    a[j] = a[j - 1];
                    a[j - 1] = c;
                }
            }
        }
        return a;
    }

    // 快速排序：设基准电，左小，右大
    function quick(a) {
        if (a.length <= 1) { return a; }
        let num = Math.floor(a.length / 2);
        let pviot = a.splice([num], 1)[0];
        let left = [];
        let right = [];

        for (let i = 0; i < a.length; i++) {
            if (a[i] < pviot) {
                left.push(a[i]);
            } else {
                right.push(a[i]);
            }
        }
        return quick(left).concat([pviot], quick(right));
    }
    //直接插入排序：前面有序，后面找合适位置插进来
    function insert1(a) {
        let length = a.length;
        for (let i = 1; i < length; i++) {
            let temp = a[i];
            for (var j = i - 1; j >= 0 && a[j] > temp; j--) {
                a[j + 1] = a[j];
            }
            a[j + 1] = temp;

        }
        return a;
    }
    //折半插入排序
    function insert2(a) {
        let length = a.length;
        for (let i = 1; i < length; i++) {
            let low = 0, high = i - 1;
            let temp = a[i];
            while (low <= high) {
                let mid = Math.floor((low + high) / 2);
                if (a[i] > a[mid]) {
                    low = mid + 1;
                } else {
                    high = mid - 1;
                }
            }
            for (let j = i - 1; j >= low; j--) {
                a[j + 1] = a[j];
            }
            a[low] = temp;
        }
        return a;
    }
    //希尔排序；
    function xier(a) {
        let length = a.length;
        let gap = Math.floor(length / 2);
        while (gap >= 1) {
            //n组交叉进行
            for (let i = gap; i < length; i++) {
                let temp = a[i];
                //直接插入排序
                for (var j = i - gap; i < length; i++) {
                    a[j + gap] = a[j];
                }
                a[j + gap] = temp;
            }
            gap = Math.floor(gap / 2);
        }
        return a;
    }

    //二分查找：递归；
    function search1(a, target, l, h) {
        let low = l || 0;
        let high = h || a.length - 1;
        let num = Math.floor((low + high) / 2);
        if (target == a[num]) {
            return num;
        } else if (target > a[num]) {
            return search1(a, target, num + 1, high);
        } else {
            return search1(a, target, 0, num - 1);
        }
    }

    //二分查找： 非递归
    function search2(a, target) {
        let low = 0;
        let high = a.length - 1;
        let num = Math.floor((low + high) / 2);
        while (low != high) {
            if (target > a[num]) {
                low = num + 1;
            } else {
                high = num - 1;
            }
            num = Math.floor((low + high) / 2);
        }
        return num;
    }

    /*节点遍历 */
    //深度遍历
    function depth(node) {
        console.log(node);
        if (node.children.length) {
            for (let i = 0; i < node.children.length; i++) {
                depth(node.children[i]);
            }
        }
    }
    //广度遍历
    function breadth(node){
       let arr = [];
       arr.push(node);
       while(arr.length > 0){
           node = arr.shift();
           console.log(node);
           if(node.children.length){
               for(let i = 0; i<node.children.length;i++){
                   arr.push(node.children[i]);
               }
           }
       }


    }

   //数组去重1
   function same1(a){
       let res =[];
       let length = a.length;
       for(let i=0;i<length; i++){
           if(res.indexOf(a[i])==-1){
               res.push(a[i]);
           }
       }
       return res;
   }
  //数组去重2
  function same2(a){
      let res=[];
      let length = a.length;
      for(let i=0;i<length;i++){
          for(let j =i+1;j<length;j++){
              if(a[j]==a[i]){
                  i=i+1;
                  j=i;
              }
          }
          res.push(a[i]);
      }
      return res;
  }


};