<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { formSchema, type FormSchema } from './schema';
	import type { SuperValidated } from 'sveltekit-superforms';
	import type { FormOptions } from 'formsnap';
	import { RotateCw } from 'lucide-svelte';

	export let form: SuperValidated<FormSchema>;

	let loading = false;

	const options: FormOptions<typeof formSchema> = {
		validators: formSchema,
		onSubmit: () => {
			// do something
			console.log('on submit');
			loading = true;
		},
		onError: () => {
			console.log('on error');
			loading = false;
		}
	};
</script>

<Form.Root method="POST" {form} schema={formSchema} let:config {options}>
	<Form.Field {config} name="email">
		<Form.Item>
			<Form.Label>Email</Form.Label>
			<Form.Input placeholder="Enter your email address" disabled={loading} />
			<Form.Validation />
		</Form.Item>
	</Form.Field>
	<Form.Field {config} name="message">
		<Form.Item>
			<Form.Label>Message</Form.Label>
			<Form.Textarea placeholder="How can I help you?" class="resize-none" disabled={loading} />
			<Form.Validation />
		</Form.Item>
	</Form.Field>
	<Form.Button class="w-full" disabled={loading}>
		{#if loading}
			<RotateCw class="mr-2 h-4 w-4 animate-spin" />
			Please Wait
		{:else}
			Submit
		{/if}
	</Form.Button>
</Form.Root>
