import Modal from "@/components/Modal";
import { useForm } from "react-hook-form";
import Success from '../../../public/images/success.png'
import Wrong from '../../../public/images/wrong.png'
import { useState } from "react";
import axios from "axios";
import { key } from "@/store/key";
import Image from "next/image";
import { useTranslation } from "next-i18next";

const OpinionForm = ({ other, }) => {
    const { t } = useTranslation('common')

    const [isOpen, setIsOpen] = useState(false)
    const [wrong, setWrong] = useState(false)
    const { register, formState: { errors, isValid }, handleSubmit, reset } = useForm({
        mode: 'onBlur',
        defaultValues: {
            first_name: '',
            last_name: '',
            email: '',
            message: ''
        },
        criteriaMode: 'all'
    })

    const onSubmit = async (d) => {

        await axios.post(`${key}/comment`, d)
            .then(() => setIsOpen(true))
            .catch(() => setWrong(true))

        reset({
            first_name: '',
            last_name: '',
            email: '',
            message: '',
        })
    }
    return (
        <section className={other ? "school-form-all" : "school-form-all school-form-white"}>
            <h2>{t("sendop")}</h2>

            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="both">
                    <fieldset>
                        <input {...register("first_name",
                            {
                                required: t("required"),
                                minLength: { value: 3, message: t("less") },
                                maxLength: { value: 29, message: t("improve") }
                            })}
                            placeholder={t("name")} />
                        {errors.first_name && <span className="error">{errors.first_name.message}</span>}
                    </fieldset>
                    <fieldset>
                        <input {...register("last_name",
                            {
                                minLength: { value: 3, message: 'This input must exceed 2 characters' },
                                maxLength: { value: 20, message: 'This input must less 21 characters' }
                            })} placeholder={t("surname")} />
                        {errors.last_name && <span className="error">{errors.last_name.message}</span>}
                    </fieldset>
                </div>
                <fieldset>
                    <input {...register("email",
                        {
                            minLength: { value: 3, message: t("less") },
                            maxLength: { value: 29, message: t("improve") }
                        })} placeholder={t("email")} />
                    {errors.email && <span className="error">{errors.email.message}</span>}
                </fieldset>
                <fieldset>
                    <textarea {...register("message",
                        {
                            required: t("required"),
                            minLength: { value: 20, message: t("lessbig") },
                            maxLength: { value: 1999, message: t("improvebig") }
                        })} placeholder={t("opinion")} />
                    {errors.message && <span className="error">{errors.message.message}</span>}
                </fieldset>

                <button disabled={!isValid} >{t("send")}</button>
            </form>
            <Modal middle isOpen={isOpen} setIsOpen={setIsOpen}>
                <div>
                    <h2>{t("messagesend")}</h2>
                    <h3 className="uppercase">{t("messageanswer")}</h3>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                        <Image src={Success} width={150} height={150} alt="success" />
                    </div>
                </div>
            </Modal>
            <Modal middle isOpen={wrong} setIsOpen={setWrong} red>
                <div>
                    <h2 style={{ color: "red" }}>{t("wrong")}</h2>
                    <h3 className="uppercase">{t("resend")}</h3>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                        <Image src={Wrong} width={150} height={150} alt="success" />
                    </div>
                </div>
            </Modal>
        </section>
    );
}

export default OpinionForm;
