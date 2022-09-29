fixture `requestapi`
test("the get products",async (t)=>{
    const result=await t.request({
        url:"https://dummyjson.com/products",
        method:"Get"
    });
   
    await t.expect(result.status).eql(200);
    await t.expect(result.body.products[0].title).eql('iPhone 9');
    console.log(result.body);
})
test("the get carts",async (t)=>{
    const result=await t.request({
        url:"https://dummyjson.com/carts",
        method:"Get"
    });
   
    await t.expect(result.status).eql(200);
    await t.expect(result.body.carts[0].discountedTotal).eql(1941);
    console.log(result.body);
})
test("the get one product",async (t)=>{
    const result=await t.request({
        url:"https://dummyjson.com/products/1",
        method:"Get"
    });
   
    await t.expect(result.status).eql(200);
    console.log(result.body);
})
test("the get search product",async (t)=>{
    const result=await t.request({
        url:"https://dummyjson.com/products/category/smartphones",
        method:"Get"
    });
   
    await t.expect(result.status).eql(200);
    console.log(result.body);
})
test("the get add product",async (t)=>{
    const result=await t.request({
        url:"https://dummyjson.com/products/add",
        method:"POST",
        body:{
            title: 'BMW Pencil'
        }
    });
   
    await t.expect(result.status).eql(200);
    console.log(result.body);
})
test("the get update product",async (t)=>{
    const result=await t.request({
        url:"https://dummyjson.com/products/1",
        method:"PUT",
        body:{
            title: 'Samsung'
        }
    });
   
    await t.expect(result.status).eql(200);
    console.log(result.body);
})
test("the get single cart",async (t)=>{
    const result=await t.request({
        url:"https://dummyjson.com/carts/user/5",
        method:"GET",
       
    });
   
    await t.expect(result.status).eql(200);
    console.log(result.body);
})
test("the get all users",async (t)=>{
    const result=await t.request({
        url:"https://dummyjson.com/users",
        method:"GET",
       
    });
   
    await t.expect(result.status).eql(200);
    console.log(result.body);
})
test("the get single user",async (t)=>{
    const result=await t.request({
        url:"https://dummyjson.com/users/1",
        method:"GET",
       
    });
   
    await t.expect(result.status).eql(200);
    console.log(result.body);
})
test("the get search user",async (t)=>{
    const result=await t.request({
        url:"https://dummyjson.com/users/search?q=John",
        method:"GET",
       
    });
   
    await t.expect(result.status).eql(200);
    console.log(result.body);
})
test("the get filter user",async (t)=>{
    const result=await t.request({
        url:"https://dummyjson.com/users/filter?key=hair.color&value=Brown",
        method:"GET",
       
    });
   
    await t.expect(result.status).eql(200);
    console.log(result.body);
})
test("the get limit and skip user",async (t)=>{
    const result=await t.request({
        url:"https://dummyjson.com/users?limit=5&skip=10&select=firstName,age",
        method:"GET",
       
    });
   
    await t.expect(result.status).eql(200);
    console.log(result.body);
})
test("the add user",async (t)=>{
    const result=await t.request({
        url:"https://dummyjson.com/users/add",
        method:"POST",
        body:{
            firstName: 'Muhammad',
            lastName: 'Ovi',
            age: 250,
        }
       
    });
   
    await t.expect(result.status).eql(200);
    console.log(result.body);
})
test("the update user",async (t)=>{
    const result=await t.request({
        url:"https://dummyjson.com/users/1",
        method:"PUT",
        body:{
        
            lastName: 'saliman'
            
        }
       
    });
   
    await t.expect(result.status).eql(200);
    console.log(result.body);
})
test("the delete user",async (t)=>{
    const result=await t.request({
        url:"https://dummyjson.com/users/1",
        method:"DELETE",
        
       
    });
   
    await t.expect(result.status).eql(200);
    console.log(result.body);
})
test("the get all posts ",async (t)=>{
    const result=await t.request({
        url:"https://dummyjson.com/posts",
        method:"GET",
        
       
    });
   
    await t.expect(result.status).eql(200);
    console.log(result.body);
})
test("the get single posts= ",async (t)=>{
    const result=await t.request({
        url:"https://dummyjson.com/posts/1",
        method:"GET",
        
       
    });
   
    await t.expect(result.status).eql(200);
    console.log(result.body);
})
test("the get search posts= ",async (t)=>{
    const result=await t.request({
        url:"https://dummyjson.com/posts/search?q=love",
        method:"GET",
        
       
    });
   
    await t.expect(result.status).eql(200);
    console.log(result.body);
})
test("the get limit skip posts= ",async (t)=>{
    const result=await t.request({
        url:"https://dummyjson.com/posts?limit=10&skip=10&select=title,reactions,userId",
        method:"GET",
        
       
    });
   
    await t.expect(result.status).eql(200);
    console.log(result.body);
})
test("the  add posts= ",async (t)=>{
    const result=await t.request({
        url:"https://dummyjson.com/posts/add",
        method:"POST",
        body:{
            title: 'I am in love with someone.',
            userId: 5,
        }
        
       
    });
   
    await t.expect(result.status).eql(200);
    console.log(result.body);
})
test("the  update posts= ",async (t)=>{
    const result=await t.request({
        url:"https://dummyjson.com/posts/1",
        method:"PUT",
        body:{
            title: 'I think I should shift to the moon',
            
        }
        
       
    });
   
    await t.expect(result.status).eql(200);
    console.log(result.body);
})
test("the  delete posts= ",async (t)=>{
    const result=await t.request({
        url:"https://dummyjson.com/posts/1",
        method:"DELETE",
        
        
       
    });
   
    await t.expect(result.status).eql(200);
    console.log(result.body);
})
