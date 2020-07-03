import * as yup from 'yup';

export interface InputValues {
  name: string;
  email: string;
  subject: string;
  message: string;
  environment?: string;
}

const stringSchema: yup.StringSchema<string | undefined> = yup.string().required('Required');
const emailSchema: yup.StringSchema<string | undefined> = yup.string().email('Please provide valid email');

const formSchema: yup.ObjectSchema<yup.Shape<
  InputValues | undefined,
  {
    name: string;
    email: string;
    subject: string;
    message: string;
  }
>> = yup.object<InputValues>().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  subject: yup.string().required(),
  message: yup.string().required(),
});

export { formSchema, stringSchema, emailSchema };
