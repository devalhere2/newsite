import type { Actions } from './$types';

  
export const actions = {
	default: async ({request}) => {
        const formData = await request.formData();
        const username = formData.get('username');
        const password = formData.get('password');
  
        const data = {
            username,
            password,
        };

        const response = await fetch('http://127.0.0.1:8000/verify_upload', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        
        const responseData = await response.json();
        
        return responseData;
    },
} satisfies Actions;