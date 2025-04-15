import { Request, Response } from "express";


export const getViews = (req: any, res: Response)=> {
    //console.log(req.session)
    if(!req.session.contador){
        req.session.contador = 1; //creando el contador e inicializándolo en 1
    } else {
        ++req.session.contador;
    }

    res.send(`<h4>Hola! Visitaste esta ruta ${req.session.contador} veces. Gracias.</h4>`)
}

export const resetViews = (req: Request, res: Response) => {
    req.session.destroy((error)=> {
        if(error) return res.status(500).send("<h5>Error al reiniciar sesión</h5>");
        res.send('<h4>Sesión reiniciada</h4>');
    })
}

export const setCookie = (req: Request, res: Response) => {
    res.cookie("username", "marcosgual", {
        maxAge: 60000 * 5,
        // httpOnly: true
    })
    res.send('<h4>Cookie configurada correctamente!</h4>')
}

export const readCookie = (req: Request, res: Response) => {
    const nombreUsuario = req.cookies.username;
    if(nombreUsuario){
        res.send(`<h4>Hola, usuario ${nombreUsuario}!</h4>`);
    }else{
        res.send('<h4>No se encontró la cookie con el nombre de usuario...</h4>')
    }
}

export const deleteCookie = (req: Request, res: Response) => {
    res.clearCookie("username");
    res.send("<h4>Cookie borrada exitosamente</h4>");
}