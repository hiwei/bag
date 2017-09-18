$(document).ready(function(){
	/* Random BG */
	var max = 5;
	var min = 1;
	var bg = (Math.floor(Math.random() * (max - min + 1)) + min);
	$('.index').css('background-image','url(img/banner'+ bg +'.jpg)');
	
	/* BAG IMG*/
	for (var i=1; i<10; i++){
		$('.item_'+ i +' figure').html('<img data-img="'+ i +'"src="img/bag'+ i +'.jpg"/>');
	}
	
	/* WHERE */
	$('.home').click(function() {
		$('html, body').animate({ scrollTop: 0 }, 1000);
	});
	$('.look').click(function() {
		$('html, body').animate({ scrollTop: $('.book').offset().top }, 1000);
	});
	$('.shop').click(function() {
		$('html, body').animate({ scrollTop: $('.outer').offset().top }, 1000);
	});

	/* ZOOM IN IMG */
	$('.item img').click(function() {
		var data_img = $(this).data('img');
		$('.detail').html('<img class="detail_img" src="img/bag'+ data_img +'.jpg"/>');
		$('.detail, .detail_img').fadeIn(500);
		$('.detail').click(function() {
			$('.detail, .detail_img').fadeOut(500);
		});
	});
	
	/* CART */
	var total_money = 0;
	$('.cart').click(function() {
		$('.buy, .white').fadeIn(500);
	});
	$('.item p').click(function() {
		if ($('.remove_buy').length > 9) {
			alert('The cart is already FULL.')
		} else {
			$('.cart').css('animation','shine 1s');
			var item_buy_num = $(this).data('buy');
			var add_item_car = $('.item_'+ item_buy_num +' .caption').text();
			var add_money_car = parseInt($('.item_'+ item_buy_num +' .right_info span').text());
			$('.buy').append('<div class="remove_buy"><span class="delete_item">╳</span>　' +add_item_car+ '　$ <span class="money">' +add_money_car+ '</span></div>');
			$('.money').each(function(){
				total_money += parseInt($(this).text());
			})
			$('.total_money').text('Total: $ ' +total_money);
			total_money = 0;
			/* DELETE ITEMS */
			$('.delete_item').click(function() {
				$(this).parent().fadeOut(500).delay(500)
				.queue(function() {
					$(this).remove();
				});
				setTimeout(function(){
					if( $('.remove_buy').length != 0) {
						$('.money').each(function(){
							total_money += parseInt($(this).text());
						})
						$('.total_money').text('Total: $ ' +total_money);
						total_money = 0;
					} else {
						$('.total_money').text('Empty here, go get some !');
					}
				}, 1500);
			});
			setTimeout(function(){
				$('.cart').css('animation','');
			}, 1000);
		}
	});
	$('.close_cart').click(function() {
		$('.buy, .white').fadeOut(500);
	})
	$('.pay').click(function() {
		alert('Just a FAKE website!')
	});
	
	$('.item_2 .caption, .item_2 .left_info, .item_2 .right_info').css('opacity','1');
	var move = -5;
	var bias = 0;
	var sign = '%';
	var item_num = 2;
	$('.next_button').click(function() {
		if ( item_num !=9 ) {
			move -= 10;
			bias += 4;
			$('.item').css('left', 'calc('+ move +'% - '+ bias +'px)');
			$('.item_' + item_num + ' .caption, .item_' + item_num + ' .left_info, .item_' + item_num + ' .right_info').css('opacity','0');
			item_num += 1;
			$('.item_' + item_num + ' .caption, .item_' + item_num + ' .left_info, .item_' + item_num + ' .right_info').css('opacity','1');
		}
		if ( item_num == 2 ) {
			$('.last_button').css('opacity','1');
			$('.last_button:hover').css('cursor','pointer');
		}
		if ( item_num == 9 ) {
			$('.next_button').css('opacity','0');
			$('.next_button:hover').css('cursor','default');
		}
	});
	$('.last_button').click(function() {
		if ( item_num != 1) {
			move += 10;
			bias -= 4;
			$('.item').css('left', 'calc('+ move +'% - '+ bias +'px)');
			$('.item_' + item_num + ' .caption, .item_' + item_num + ' .left_info, .item_' + item_num + ' .right_info').css('opacity','0');
			item_num -= 1;
			$('.item_' + item_num + ' .caption, .item_' + item_num + ' .left_info, .item_' + item_num + ' .right_info').css('opacity','1');
		}
		if ( item_num == 1 ) {
			$('.last_button').css('opacity','0');
			$('.last_button:hover').css('cursor','default');
		}
		if ( item_num == 8 ) {
			$('.next_button').css('opacity','1');
			$('.next_button').css('cursor','pointer');
		}
	});
});