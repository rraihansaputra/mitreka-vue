<template>
	<v-container>
		<v-card
			class="mx-auto"
			max-width="434"
			tile
		>
			<v-img
			height="100%"
			src="https://earthrights.org/wp-content/uploads/black.jpeg"
			>
				<v-row
					align="end"
					class="fill-height"
				>
					<v-col
					align-self="start"
					class="pa-0"
					cols="12"
					>
						<v-avatar
							class="profile"
							color="grey"
							size="164"
							tile
						>
							<v-img src="https://timesofindia.indiatimes.com/thumb/msid-67586673,width-800,height-600,resizemode-4/67586673.jpg"></v-img>
						</v-avatar>
					</v-col>
					<v-col class="py-0">
						<v-list-item
							color="rgba(0, 0, 0, .4)"
							dark
						>
							<v-list-item-content>
								<v-list-item-title class="title">M. Ifrozin Farhan</v-list-item-title>
								<v-list-item-subtitle>Programmer Cupu</v-list-item-subtitle>
							</v-list-item-content>
						</v-list-item>
					</v-col>
				</v-row>
			</v-img>
		</v-card>
		<v-card
			class="mx-auto"
			max-width="434"
			tile
		>
			<v-list-item two-line>
				<v-list-item-content>
					<v-list-item-title>URL</v-list-item-title>
					<v-list-item-subtitle>{{contact.url}}</v-list-item-subtitle>
				</v-list-item-content>
			</v-list-item>
			<v-list-item two-line>
				<v-list-item-content>
					<v-list-item-title>Name</v-list-item-title>
					<v-list-item-subtitle>{{contact.name}}</v-list-item-subtitle>
				</v-list-item-content>
			</v-list-item>
			<v-list-item two-line>
				<v-list-item-content>
					<v-list-item-title>Phone Number</v-list-item-title>
					<v-list-item-subtitle>{{contact.phone_number}}</v-list-item-subtitle>
				</v-list-item-content>
			</v-list-item>
			<v-list-item two-line>
				<v-list-item-content>
					<v-list-item-title>Website</v-list-item-title>
					<v-list-item-subtitle>{{contact.website}}</v-list-item-subtitle>
				</v-list-item-content>
			</v-list-item>
			<v-list-item two-line>
				<v-list-item-content>
					<v-list-item-title>Address</v-list-item-title>
					<v-list-item-subtitle>{{contact.address}}</v-list-item-subtitle>
				</v-list-item-content>
			</v-list-item>
			<v-list-item two-line>
				<v-list-item-content>
					<v-list-item-title>Employees</v-list-item-title>
					<v-list-item-subtitle>{{contact.employees}}</v-list-item-subtitle>
				</v-list-item-content>
			</v-list-item>
			<v-list-item two-line>
				<v-list-item-content>
					<v-list-item-title>Notes</v-list-item-title>
					<v-list-item-subtitle>{{contact.notes}}</v-list-item-subtitle>
				</v-list-item-content>
			</v-list-item>
		</v-card>
    </v-container>
</template>
<script>
export default {
    props: ['contact'],
}
</script>