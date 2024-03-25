import { Section } from '../Section';
import { Title } from '../Title';
import sprite from '../../assets/images/sprite.svg';
import {
  Svg,
  Text,
  Wrap,
  Input,
  Svg2,
  WrapSvg,
  WrapInput,
  Btn,
  Error,
} from './ContactUs.styled';
import { Formik, Form, getIn } from 'formik';
import * as yup from 'yup';
import { toast } from 'react-toastify';

const nameRegex = /^[A-Za-z@0-9]+$/;

const schema = yup.object().shape({
  username: yup
    .string()
    .matches(nameRegex, 'WRONG DISCORD')
    .required('REQUIRED FIEID'),
  address: yup
    .string()
    .matches(nameRegex, 'WRONG ADDRESS')
    .min(24)
    .required('REQUIRED FIEID'),
});

const initialValues = {
  username: '',
  address: '',
};

function getStyles(errors, fieldName) {
  if (getIn(errors, fieldName)) {
    return {
      border: '1px solid red',
    };
  }
}

function CustomInput({ field, form: { errors } }) {
  return (
    <div>
      <Input
        {...field}
        style={getStyles(errors, field.name)}
        placeholder={
          field.name === 'username' ? '@username' : '1x28601vsdfg31543cs'
        }
      />
    </div>
  );
}

export const ContactUs = () => {
  const handleSubmit = (v, a) => {
    toast.info('Data successfully sent.');
    a.resetForm();
  };

  return (
    <Section>
      <Title text="Are you in?" />
      <Wrap>
        <div>
          <Svg>
            <use href={`${sprite}#cross`}></use>
          </Svg>
        </div>
        <Text>
          Join the YACHT APE community to be one of the first to receive our
          limited edition NFT
        </Text>

        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={handleSubmit}
        >
          <Form autoComplete="off">
            <WrapInput>
              <WrapSvg>
                <Svg2>
                  <use href={`${sprite}#discord`}></use>
                </Svg2>
              </WrapSvg>
              <Input
                type="text"
                name="username"
                component={CustomInput}
                // placeholder="@username"
              />
            </WrapInput>
            <Error name="username" component="div" />
            <WrapInput>
              <WrapSvg>
                <Svg2>
                  <use href={`${sprite}#mm`}></use>
                </Svg2>
              </WrapSvg>
              <Input
                type="text"
                name="address"
                component={CustomInput}
                // placeholder="1x28601vsdfg31543cs"
              />
            </WrapInput>
            <Error name="address" component="div" />
            <Btn type="submit">MINT</Btn>
          </Form>
        </Formik>
      </Wrap>
    </Section>
  );
};
