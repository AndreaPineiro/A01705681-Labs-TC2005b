const Producto = require('../models/producto');

exports.getAgregarProducto = (request, response, next) => {
    //console.log('Alguien ingreso a la página agregar productos');
    response.render('agregarProducto', {
        title: "Laboratorio 18 -  AgregarProducto",
        name: "Laboratorio 18 - Agregar Producto",
        csrfToken: request.csrfToken(),
        isLoggedIn: request.session.isLoggedIn === true ? true : false
    });
};

exports.postAgregarProducto = (request, response, next) => {
    //console.log(request.body.nombre_producto);
    const image = request.file;
    console.log(image);

    if(!image) {
        console.error('Error al subir la imagen');
    }

    const nuevo_producto = new Producto(request.body.nombre_producto, request.file.filename, request.body.precio_producto);
    nuevo_producto.save()
        .then(() => {
            response.setHeader('Set-Cookie', ['ultimo_producto=' +nuevo_producto.nombre +'; HttpOnly']);
            response.redirect('/productos');
            response.redirect('/');
        }).catch(err => console.log(err));
};

exports.get = (request, response, next) => {
    // Con cookie Parser
    console.log(request.cookies);
    console.log(request.cookies.ultimo_producto);
    
    // Sin cookie Parser
    //console.log('Cookie: ' + request.get('Cookie'));
    //console.log('Cookie: ' + request.get('Cookie').split(':')[0].trim().split('=')[1]);
    
    Producto.fetchAll()
        .then(([rows, fieldData]) => {
            // const productos = [];
            // for (let producto of rows) {
            //     productos.push({
            //         nombre: producto.nombre, 
            //         imagen: producto.imagen, 
            //         precio: producto.precio});
            // }
            // console.log(productos);
            response.render('productos', {
                lista_productos: rows,
                title: "Laboratorio 18 -  Productos",
                name: "Laboratorio 18 - Productos",
                isLoggedIn: request.session.isLoggedIn === true ? true : false
            });
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getProducto = (request, response, next) => {
    const id = request.params.producto_id;
    Producto.fetchOne(id)
        .then(([rows, fieldData]) => {
            response.render('productos', {
                lista_productos: rows,
                title: "Laboratorio 18 -  Producto",
                name: "Laboratorio 18 - Producto",
                isLoggedIn: request.session.isLoggedIn === true ? true : false
            });
        })
        .catch(err => {
            console.log(err);
        }); 
};


