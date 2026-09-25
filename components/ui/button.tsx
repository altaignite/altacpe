import type { ComponentProps } from 'react'
import Link from 'next/link'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva('ui-button', {
  variants: {
    variant: { default: 'ui-button-primary', secondary: 'ui-button-secondary', inverse: 'ui-button-inverse', outline: 'ui-button-outline', ghost: 'ui-button-ghost', destructive: 'ui-button-destructive', link: 'ui-button-link' },
    size: { default: 'ui-button-md', xs: 'ui-button-sm', sm: 'ui-button-sm', lg: 'ui-button-lg', icon: 'ui-button-icon', 'icon-xs': 'ui-button-icon', 'icon-sm': 'ui-button-icon', 'icon-lg': 'ui-button-icon ui-button-lg' },
  },
  defaultVariants: { variant: 'default', size: 'default' },
})
type ButtonStyleProps = VariantProps<typeof buttonVariants>

function Button({ className, variant, size, type = 'button', ...props }: ComponentProps<'button'> & ButtonStyleProps) {
  return <button data-slot="button" type={type} className={cn(buttonVariants({ variant, size }), className)} {...props} />
}

// Navigation retains link semantics, including opening in a new tab.
function ButtonLink({ className, variant, size, ...props }: ComponentProps<typeof Link> & ButtonStyleProps) {
  return <Link data-slot="button" className={cn(buttonVariants({ variant, size }), className)} {...props} />
}
export { Button, ButtonLink, buttonVariants }
