<template>
<v-card class="mx-auto" max-width="450">
	<v-card-title class="post-title">
		<span class="title font-weight-light">Update Post</span>
	</v-card-title>
	<v-form ref="form" @submit.prevent="updatePostConfirm">
		<v-card-text>
			<div class="post-input">
				<v-text-field
					outlined
					:value="postInfo.title" 
					v-model="postInfo.title"
					type="text" 
					label="Title" 
					hide-details="auto" 
					class="error-box" 
				>
				</v-text-field>
				<span v-if="error && error.title"  class="error-message">{{ error.title[0] }}</span>
			</div>
			<div class="post-input">
				<v-textarea 
					outlined 
					rows="4" 
					:value="postInfo.description" 
					v-model="postInfo.description"
					label="Description" 
					hide-details="auto"
				>
				</v-textarea>
				<span v-if="error && error.description" class="error-message">{{ error.description[0] }}</span>
			</div>
		</v-card-text>
		<v-card-actions>
			<div class="post-create-action">
				<v-spacer></v-spacer>
				<v-btn type="submit" large color="primary" style="margin-right: 10px;">Confirm</v-btn>
				<v-btn large color="primary" style="margin-right: 10px;" @click="removePostInputs">Clear</v-btn>
			</div>
		</v-card-actions>
	</v-form>
</v-card>
</template>

<script src="../../services/post/update-post.js"></script>

<style scoped src="../../assets/css/pages/post/update-post.css"></style>
