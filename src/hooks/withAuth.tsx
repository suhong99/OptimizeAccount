import { ComponentType } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

// 인증이 필요한지 확인해 주는 HOC패턴 컴퍼넌트
function withAuth<Props = Record<string, never>>(
  WrappedComponent: ComponentType<Props>,
) {
  return function AuthenticatedComponent(props: Props) {
    const { data, status } = useSession()
    const router = useRouter()

    if (status !== 'loading' && data == null) {
      router.replace('/auth/signin')

      return null
    }

    return <WrappedComponent {...(props as any)} />
  }
}

export default withAuth
