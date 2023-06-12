import Modal from "@/components/Modal";
import { useForm } from "react-hook-form";
import Success from '../../../public/images/success.png'
import Wrong from '../../../public/images/wrong.png'
import { useState } from "react";
import axios from "axios";
import { key } from "@/store/key";
import Image from "next/image";
import { useTranslation } from "next-i18next";

const SchoolForm = ({ other, }) => {
    const { t } = useTranslation('common')


    const [isOpen, setIsOpen] = useState(false);
    const [wrong, setWrong] = useState(false)
    const { register, formState: { errors, isValid }, handleSubmit, reset } = useForm({
        mode: 'onBlur',
        defaultValues: {
            first_name: '',
            last_name: '',
            email: '',
            phone_number: '',
            address: '',
            time_at: '11:30 - 14:00',
            company_name: '',
            director_full_name: '',
            location: '',
            company_phone_number: '',
            support_bank: '',
            bank_account_number: '',
            hvhh: ''
        },
        criteriaMode: 'all'
    })

    const onSubmit = async (d) => {

        await axios.post(`${key}/register`, d)
            .then(() => setIsOpen(true))
            .catch(() => setWrong(true))

        reset({
            first_name: '',
            last_name: '',
            email: '',
            phone_number: '',
            address: '',
            time_at: '11:30 - 14:00',
            company_name: '',
            director_full_name: '',
            location: '',
            company_phone_number: '',
            support_bank: '',
            bank_account_number: '',
            hvhh: ''
        })
    }
    return (
        <section className={other ? "school-form-all" : "school-form-all school-form-white"}>
            {other && <h2>{t("register")}</h2>}
            {other && <h3>{t("school")}</h3>}
            <form onSubmit={handleSubmit(onSubmit)}>
                <p>{t("user")}</p>
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
                    <input {...register("phone_number",
                        {
                            required: t("required"),
                            minLength: { value: 3, message: t("less") },
                            maxLength: { value: 29, message: t("improve") }
                        })} placeholder={t("phone")} type={'number'} />
                    {errors.phone_number && <span className="error">{errors.phone_number.message}</span>}
                </fieldset>
                {/* <fieldset>
                    <input {...register("address",
                        {
                            minLength: { value: 3, message: t("less") },
                            maxLength: { value: 29, message: t("improve") }
                        })} placeholder={t("address")} />
                    {errors.address && <span className="error">{errors.address.message}</span>}
                </fieldset>
                <p>{t("choose")}</p>
                <div className="both">
                    <label htmlFor="radio1" className={!other ? "check check-one" : "check"}>
                        <input type="radio" id="radio1" value={'11:30 - 14:00'} {...register("time_at")} />
                        <div className={!other ? "des des-one" : "des"}></div>
                        <p>11:30 - 14:00</p>
                    </label>
                    <label className={!other ? "check check-one" : "check"}>
                        <input type="radio" id="radio2" value={'15:30 - 18:00'} {...register("time_at")} />
                        <div className={!other ? "des des-one" : "des"}></div>
                        <p>15:30 - 18:00</p>
                    </label>
                </div>
                <p>{t("payment")}</p>
                <fieldset>
                    <input {...register("company_name",
                        {
                            minLength: { value: 3, message: t("less") },
                            maxLength: { value: 29, message: t("improve") }
                        })} placeholder={t("fullname")} />
                    {errors.company_name && <span className="error">{errors.company_name.message}</span>}
                </fieldset>
                <fieldset>
                    <input {...register("director_full_name",
                        {
                            minLength: { value: 3, message: t("less") },
                            maxLength: { value: 29, message: t("improve") }
                        })} placeholder={t("boss")} />
                    {errors.director_full_name && <span className="error">{errors.director_full_name.message}</span>}
                </fieldset>
                <div className="both">
                    <fieldset>
                        <input {...register("location",
                            {
                                minLength: { value: 3, message: t("less") },
                                maxLength: { value: 29, message: t("improve") }
                            })} placeholder={t("place")} />
                        {errors.location && <span className="error">{errors.location.message}</span>}
                    </fieldset>
                    <fieldset>
                        <input {...register("company_phone_number",
                            {
                                minLength: { value: 3, message: t("less") },
                                maxLength: { value: 29, message: t("improve") }
                            })} placeholder={t("phone")} type={'number'} />
                        {errors.company_phone_number && <span className="error">{errors.company_phone_number.message}</span>}
                    </fieldset>
                </div>
                <fieldset>
                    <input {...register("support_bank",
                        {
                            minLength: { value: 3, message: t("less") },
                            maxLength: { value: 29, message: t("improve") }
                        })} placeholder={t("bank")} />
                    {errors.support_bank && <span className="error">{errors.support_bank.message}</span>}
                </fieldset>
                <fieldset>
                    <input {...register("bank_account_number",
                        {
                            minLength: { value: 3, message: t("less") },
                            maxLength: { value: 29, message: t("improve") }
                        })} placeholder={t("banknum")} />
                    {errors.bank_account_number && <span className="error">{errors.bank_account_number.message}</span>}
                </fieldset>
                <fieldset>
                    <input {...register("hvhh",
                        {
                            minLength: { value: 3, message: t("less") },
                            maxLength: { value: 29, message: t("improve") }
                        })} placeholder={t("hvhh")} />
                    {errors.hvhh && <span className="error">{errors.hvhh.message}</span>}
                </fieldset> */}
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

export default SchoolForm;
