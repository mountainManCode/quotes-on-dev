<form role="search" method="get" class="search-form" action="<?php echo home_url( '/' ); ?>">
	<fieldset id="fieldset">
		<label>
			<input type="search" class="search-field" placeholder="SEARCH ..." value="<?php echo esc_attr( get_search_query() ); ?>" name="s" title="Search for:" />
		</label>
		<button class="search-submit"><i class="fa fa-search" aria-hidden="true"></i>
			<?php echo esc_html( '' ); ?>
		</button>
	</fieldset>
</form>
