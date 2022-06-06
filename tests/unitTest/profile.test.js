const profileController= require('../../controller/profileController')
  describe('When data is valid', () => {
      it ('the first test', async () => {
//given 
req={
    user:{_id:"629c6f3dce77a720b07f23ed"}
}
// expected user 
expected_user={
    "_id": "629c6f3dce77a720b07f23ed",
    "email": "benslamauseuse@gmail.com",
    "name": "useuse",
    "surname": "user2",
    "password": null,
    "adress": "Tunis",
    "phone": "56421565",
    "gender": "male",
    "role": "Pet Owner",
    "birthday": "1999-05-14T00:00:00.000Z",
    "avatar": "default.jpg",
    "createdAt": "2022-06-05T08:54:21.238Z",
    "updatedAt": "2022-06-05T08:54:21.238Z",
    "__v": 0
}
   result=profileController.getProfile(req)
   console.log(result)
   console.log("result pending")
   
        await expect(result == expected_user);
    });
});