const axios = require('axios');
const assert = require('assert');

describe('API Testing for Endpoint: /posts', function() {

    // Test Case 1 Get All
    it('Get All Posts', async function() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        assert.strictEqual(response.status, 200);
        assert.ok(response.data.length > 0);
    });

    // Test Case 2 Get Single
    it('Get Single Post', async function() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        assert.strictEqual(response.status, 200);
        assert.strictEqual(response.data.id, 1);
    });

    // Test Case 3 Post
    it('Create New Post', async function() {
        const newPost = {
            title: 'New Post',
            body: 'This is a new post',
            userId: 1
        };
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', newPost);
        assert.strictEqual(response.status, 201);
        assert.deepStrictEqual(response.data, {
            ...newPost,
            id: response.data.id
        });
    });

    // Test Case 4 Put
    it('Update Post', async function() {
        const updatedPost = {
            title: 'Updated Post',
            body: 'This post has been updated',
            userId: 1
        };
        const response = await axios.put('https://jsonplaceholder.typicode.com/posts/1', updatedPost);
        assert.strictEqual(response.status, 200);
        assert.deepStrictEqual(response.data, {
            ...updatedPost,
            id: response.data.id
        });
    });


    // Test Case 5 Delete
    it('Delete Post', async function() {
        const response = await axios.delete('https://jsonplaceholder.typicode.com/posts/1');
        assert.strictEqual(response.status, 200);
    });
});

