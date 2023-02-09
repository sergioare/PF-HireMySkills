const users = require('../models/users.js');

const patchUser = async (req, res) => {
    const { id } = req.params;
    const { name, photo, town, email, contact } = req.body;
    try {
        const user = "";
        if(name && photo && town && email && contact) {
            const user = await users.update({ 
                name: name,
                photo: photo,
                town: town,
                email: email,
                contact: contact
            }, { where: { id: id } })
            // console.log(user, 'USER');
            return user
        }
        if(name) {
            const user = await users.update({ name: name }, { where: { id: id }});
            // console.log(user, 'USER name');
        }
        if(photo) {
            const user = await users.update({ photo: photo }, { where: { id: id }});
            // console.log(user, 'USER photo');
        }
        if(town) {
            const user = await users.update({ town: town }, { where: { id: id }});
            // console.log(user, 'USER town');
        }
        if(email) {
            const user = await users.update({ email: email }, { where: { id: id }});
            // console.log(user, 'USER email');
        }
        if(contact) {
            const user = await users.update({ contact: contact }, { where: { id: id }});
            // console.log(user, 'USER contact');
        }
        // if(name) }
        // await user.save()

        res.send({ message: 'Modified user' });
    } catch (error) {
        res.send({ message: error.message });
    };
};

module.exports = { patchUser };