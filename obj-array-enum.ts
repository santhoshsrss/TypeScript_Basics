// const person: {
//     name: string;
//     age: number;
//     country: string;
//     hobbies: string[];
//     role: [number, string]
// } =
enum Page {admin, read_only, author};

const person = 
{
    name: 'Santhosh',
    age: 23,
    country: 'India',
    hobbies: ['sports', 'reading'],
    role: [2, 'author'],
    page: Page.admin
};

// person.role.push('admin');
// person.role[1] = 10;


let favoriteActivity: string[];
favoriteActivity = ['eating', 'riding']

console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby)
}

if(person.page === Page.admin) {
    console.log('ADMIN IS AVAILABLE')
}