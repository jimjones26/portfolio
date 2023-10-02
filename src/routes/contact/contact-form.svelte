<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { formSchema, type FormSchema } from './schema';
	import type { SuperValidated } from 'sveltekit-superforms';

	export let form: SuperValidated<FormSchema>;
</script>

<Form.Root method="POST" {form} schema={formSchema} let:config>
	<Form.Field {config} name="email">
		<Form.Item>
			<Form.Label>Email</Form.Label>
			<Form.Input placeholder="Enter your email address" />
			<Form.Validation />
		</Form.Item>
	</Form.Field>
	<Form.Field {config} name="message">
		<Form.Item>
			<Form.Label>Message</Form.Label>
			<Form.Textarea placeholder="How can I help you?" class="resize-none" />
			<Form.Validation />
		</Form.Item>
	</Form.Field>
	<Form.Button class="w-full">Submit</Form.Button>
</Form.Root>
