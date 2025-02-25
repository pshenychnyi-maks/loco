import { Modal } from '../Modal/Modal';
import { FC, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import * as S from './styles';

const signInSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

const signUpSchema = signInSchema.extend({
  isBusiness: z.boolean(),
});

type SignInFormData = z.infer<typeof signInSchema>;
type SignUpFormData = z.infer<typeof signUpSchema>;

interface IProps {
  onClose: () => void;
}

export const AuthModal: FC<IProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<'signIn' | 'newAccount'>('signIn');
  const isSignInTabActive = activeTab === 'signIn';

  const formMethodsSignIn = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
    mode: 'onChange',
  });

  const formMethodsSignUp = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    mode: 'onChange',
  });

  const {
    register: signInRegister,
    handleSubmit: handleSignInSubmit,
    formState: { errors: signInErrors },
  } = formMethodsSignIn;
  const {
    register: signUpRegister,
    handleSubmit: handleSignUpSubmit,
    formState: { errors: signUpErrors },
  } = formMethodsSignUp;

  const onSignIn: SubmitHandler<SignInFormData> = async data => {
    console.log('Signing in...', data);
  };

  const onSignUp: SubmitHandler<SignUpFormData> = async data => {
    console.log('Creating account...', data);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const renderError = (errors: any, field: string) =>
    errors[field] && <S.ErrorText>{errors[field].message}</S.ErrorText>;

  return (
    <Modal onClose={onClose}>
      <S.TabContainer>
        {(
          [
            { tab: 'signIn', text: 'Sign in' },
            { tab: 'newAccount', text: 'New account' },
          ] as const
        ).map(({ tab, text }) => (
          <S.TabButton
            key={tab}
            $isActive={activeTab === tab}
            onClick={() => setActiveTab(tab)}
          >
            {text}
          </S.TabButton>
        ))}
      </S.TabContainer>

      <form
        onSubmit={
          isSignInTabActive
            ? handleSignInSubmit(onSignIn)
            : handleSignUpSubmit(onSignUp)
        }
      >
        <S.Input
          {...(isSignInTabActive
            ? signInRegister('email')
            : signUpRegister('email'))}
          type="email"
          placeholder="Email"
        />
        {renderError(isSignInTabActive ? signInErrors : signUpErrors, 'email')}

        <S.Input
          {...(isSignInTabActive
            ? signInRegister('password')
            : signUpRegister('password'))}
          type="password"
          placeholder="Password"
        />
        {renderError(
          isSignInTabActive ? signInErrors : signUpErrors,
          'password'
        )}

        {!isSignInTabActive && (
          <S.CheckboxLabel>
            <input type="checkbox" {...signUpRegister('isBusiness')} />
            Business account
          </S.CheckboxLabel>
        )}

        <S.Button type="submit">
          {isSignInTabActive ? 'Sign in' : 'Submit'}
        </S.Button>
      </form>

      <S.Button>Sign in with Google</S.Button>
    </Modal>
  );
};
