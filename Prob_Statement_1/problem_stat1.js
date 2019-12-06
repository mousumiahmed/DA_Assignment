    //first Approach for solution
    var max_mark=[5,5,4,6,7,3,10,10,10,10,10,10,10,10]
    var stu_mark=[3,5,2,4,2,3,10,10,10,10,10,10,10,10]
    var count=0;
    let result = max_mark.map((item, i) => item >=stu_mark[i]);

    for(var i=0;i<result.length;i++){
      if(result[i]==true){
      count++
    }
    }
    var arr=[];
    //console.log(count);
    var g1=0,g2=0,g3=0,g4=0,g5=0;
    if(count==stu_mark.length){
      for(var i=0;i<2;i++){
        g1+=stu_mark[i];
      }
      for(var i=2;i<4;i++){
        g2+=stu_mark[i];
      }
      for(var i=4;i<6;i++){
        g3+=stu_mark[i];
      }
      for(var i=6;i<9;i++){
        g4+=stu_mark[i];
      }
      for(i=9;i<stu_mark.length;i++){
        arr.push(stu_mark[i])
      }

    }
    arr.sort((a,b)=>{return a-b})
    //console.log(arr);
    for(var i=arr.length-3;i<arr.length;i++){
    g5+=arr[i];
    }
    var gcount=[];
    gcount.push(g1)
    gcount.push(g2)
    gcount.push(g3)
    gcount.push(g4)
    gcount.push(g5)

    //console.log(gcount);
    gcount.sort((a,b)=>{return a-b})
    var ans=0;
    for(var i=gcount.length-4;i<gcount.length;i++){
    ans+=gcount[i];
    }
    console.log(ans);


//2nd Approach for Solution
  var arr=[{"section":"S1","S1_limit":2,"group":"G1","G1_limit":2,"q":{"max_mark":5,"stu_mark":3}},
          {"section":"S1","S1_limit":2,"group":"G1","G1_limit":2,"q":{"max_mark":5,"stu_mark":5}},
          {"section":"S1","S1_limit":2,"group":"G2","G2_limit":2,"q":{"max_mark":4,"stu_mark":2}},
          {"section":"S1","S1_limit":2,"group":"G2","G2_limit":2,"q":{"max_mark":6,"stu_mark":4}},
          {"section":"S1","S1_limit":2,"group":"G3","G3_limit":2,"q":{"max_mark":7,"stu_mark":2}},
          {"section":"S1","S1_limit":2,"group":"G3","G3_limit":2,"q":{"max_mark":3,"stu_mark":3}},
          {"section":"S2","S2_limit":2,"group":"G4","G4_limit":3,"q":{"max_mark":10,"stu_mark":10}},
          {"section":"S2","S2_limit":2,"group":"G4","G1_limit":3,"q":{"max_mark":10,"stu_mark":10}},
          {"section":"S2","S2_limit":2,"group":"G4","G1_limit":3,"q":{"max_mark":10,"stu_mark":10}},
          {"section":"S2","S2_limit":2,"group":"G5","G2_limit":3,"q":{"max_mark":10,"stu_mark":10}},
          {"section":"S2","S2_limit":2,"group":"G5","G2_limit":3,"q":{"max_mark":10,"stu_mark":10}},
          {"section":"S2","S2_limit":2,"group":"G5","G3_limit":3,"q":{"max_mark":10,"stu_mark":10}},
          {"section":"S2","S2_limit":2,"group":"G5","G3_limit":3,"q":{"max_mark":10,"stu_mark":10}},
          {"section":"S2","S2_limit":2,"group":"G5","G4_limit":3,"q":{"max_mark":10,"stu_mark":10}}]

       var limit={"S1_limit":2,"S2_limit":2,"G1_limit":2,"G2_limit":2,"G3_limit":2,"G4_limit":3,"G5_limit":3}

       //console.log(arr.length)
       var G1=[],G2=[],G3=[],G4=[],G5=[];
       var G1_sum=0,G2_sum=0,G3_sum=0,G4_sum=0,G5_sum=0;
       for(var i=0;i<arr.length;i++){
        if(arr[i].group==="G1"){
          //console.log(arr[i].q.stu_mark);
          //console.log(arr[0].q1.stu_mark);
          G1.push(arr[i].q.stu_mark);
        }
        else if(arr[i].group==="G2"){
          G2.push(arr[i].q.stu_mark);
        }
        else if(arr[i].group==="G3"){
          G3.push(arr[i].q.stu_mark);
        }
        else if(arr[i].group==="G4"){
          G4.push(arr[i].q.stu_mark);
        }
        else if(arr[i].group==="G5"){
          G5.push(arr[i].q.stu_mark);
        }
      }
      //console.log(limit.G1_limit)
      G1.sort((a,b)=>{return a-b})
      G2.sort((a,b)=>{return a-b})
      G3.sort((a,b)=>{return a-b})    
      G4.sort((a,b)=>{return a-b})
      G5.sort((a,b)=>{return a-b})
     
      if(G1.length-limit.G1_limit===0){
        for(var i=0;i<G1.length;i++){
          G1_sum+=G1[i]
        }
        
      }
      else{
        for(var i=G1.length-limit.G1_limit;i<G1.length;i++){
          G1_sum+=G1[i]
        }

      }
      //console.log(G1_sum);

      if(G2.length-limit.G2_limit===0){
        for(var i=0;i<G2.length;i++){
          G2_sum+=G2[i]
        }
        
      }
      else{
        for(var i=G2.length-limit.G2_limit;i<G2.length;i++){
          G2_sum+=G2[i]
        }

      }
      //console.log(G2_sum);
      //console.log(G3.length,limit.G3_limit)
      if(G3.length-limit.G3_limit===0){
        for(var i=0;i<G3.length;i++){
          G3_sum+=G3[i]
        } 
       // console.log(G3_sum)       
      }
      else{
        for(var i=G2.length-limit.G2_limit;i<G2.length;i++){
          G3_sum+=G2[i]
        }
      }
      //console.log(G3_sum);

      if(G4.length-limit.G4_limit===0){
        for(var i=0;i<G4.length;i++){
          G4_sum+=G4[i]
        }
        
      }
      else{
        for(var i=G4.length-limit.G4_limit;i<G4.length;i++){
          G4_sum+=G5[i]
        }

      }
      //console.log(G4_sum);

      if(G5.length-limit.G5_limit===0){
        for(var i=0;i<G5.length;i++){
          G5_sum+=G5[i]
        }
        
      }
      else{
        for(var i=G5.length-limit.G5_limit;i<G5.length;i++){
          G5_sum+=G5[i]
        }

      }
      //console.log(G5_sum);

      var s1=[],s2=[];
      s1.push(G1_sum)
      s1.push(G2_sum)
      s1.push(G3_sum)

      s2.push(G4_sum)
      s2.push(G5_sum);
      s1.sort((a,b)=>{return a-b})
      s1.sort((a,b)=>{return a-b})
      var final=[]

      if(s1.length-limit.S1_limit===0){
        for(var i=0;i<s1.length;i++){
         final.push(s1[i])
        }       
      }
      else{
        for(var i=s1.length-limit.S1_limit;i<s1.length;i++){
          final.push(s1[i])
        }
      }

      if(s2.length-limit.S2_limit===0){
        for(var i=0;i<s2.length;i++){
         final.push(s2[i])
        }       
      }
      else{
        for(var i=s2.length-limit.S2_limit;i<s2.length;i++){
          final.push(s2[i])
        }
      }
      //console.log(final);
      console.log(final.reduce((acc,a)=>{return acc+=a}))