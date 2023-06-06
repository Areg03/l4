import axios from "axios"
import { key } from "./key"

export const bannerApi = async (lang) => {
    const response = await axios.get(`${key}/banner?language=${lang}`)
    return response.data.data
}

export const contactApi = async (lang) => {
    const response = await axios.get(`${key}/contact?language=${lang}`)
    return response.data.data
}

export const contentSliderApi = async (lang) => {
    const response = await axios.get(`${key}/content/slider?language=${lang}`)
    return response.data.data
}

export const galleryApi = async (lang) => {
    const response = await axios.get(`${key}/gallery`)
    return response.data.data
}

export const galleryItemApi = async (id) => {
    const response = await axios.get(`${key}/gallery/current?id=${id}`)
    return response.data.data
}

export const linkApi = async (lang) => {
    const response = await axios.get(`${key}/link?language=${lang}`)
    return response.data.data
}
export const partnerApi = async (lang) => {
    const response = await axios.get(`${key}/partner?language=${lang}`)
    return response.data.data
}

export const categoryApi = async (lang) => {
    const response = await axios.get(`${key}/picture/categories?language=${lang}`)
    return response.data.data
}


export const serviceApi = async (lang) => {
    const response = await axios.get(`${key}/service?language=${lang}`)
    return response.data.data
}

export const sliderApi = async (lang) => {
    const response = await axios.get(`${key}/slider?language=${lang}`)
    return response.data.data
}

export const teamApi = async (lang) => {
    const response = await axios.get(`${key}/team?language=${lang}`)
    return response.data.data
}

export const aboutApi = async (lang) => {
    const response = await axios.get(`${key}/about?language=${lang}`)
    return response.data.data
}

export const opinionApi = async (lang) => {
    const response = await axios.get(`${key}/comment?language=${lang}`)
    return response.data.data
}