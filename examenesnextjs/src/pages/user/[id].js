import { useRouter } from 'next/router'

let userid = ""

export default function user() {

    userid = useRouter().query.id
    return (
        <div>
            <a onLoad={goToPage(userid)}> Loading...</a>
        </div>
    )
}

async function goToPage(uid) {

    let config = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },

    }

    let r = await fetch("http://localhost:3000/api/user/" + uid, config)
    console.log(r);
    const result = await r.json()


    if (`${result.data}` == "student") {
        window.location.assign("http://localhost:3000/student/" + uid)
    } else if (`${result.data}` == "teacher") {
        window.location.assign("http://localhost:3000/teacher/" + uid)

    }
}
