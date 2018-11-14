const http = new EasyHttp();

const post = {
    userId: 1,
    title: 'Test Post',
    body: 'This is a test post'
}
/* //Get Request
http.get('https://jsonplaceholder.typicode.com/posts').then(function (data) {
    console.log(data);
}).catch(function (err) {
    console.log(err);
})
 */
/* //Post Request
http.post('https://jsonplaceholder.typicode.com/posts', post).then(function(data){
    console.log(data);
}).catch(function (err) {
    console.log(err);
})
 */
/* //PUT request
http.put('https://jsonplaceholder.typicode.com/posts/3', post).then(function(data){
    console.log(data);
}).catch(function (err) {
    console.log(err);
}) */

http.delete('https://jsonplaceholder.typicode.com/posts/3', post).then(function(data){
    console.log(data);
}).catch(function (err) {
    console.log(err);
})