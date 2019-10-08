import axios from 'axios'

var url = "http://127.0.0.1/"

export var getContacts = () => {
    return axios.get(url + 'contacts/').
        then((response) => response)
}

export var getInteractions = () => {
    return axios.get(url+ 'interactions/').
        then((response) => response)
}

export var getFromUrl = (url) => {
    return axios.get(url)
}

export var putFromUrl = (url, form) => {
    return axios.put(url, form).
        then((response) => response)
}

export var postContacts = (form) => {
    return axios.post(url + 'contacts/', form).
        then((response) => response)
}

export var postInteractions = (form) => {
    return axios.post(url + 'interactions/', form).
        then((response) => response)
}