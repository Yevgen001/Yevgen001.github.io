
function add()
{
    var Item = $('.part-form').first().clone();
    $('.parts-form').append(Item);
}
function remove()
{
    var part = $('.part-form');
    if (part.length > 1) {
        part.last().remove();
    }

}

$(function () {
    $('.parts-form').on('change', '.part-form #parcel-pallet', function () {
        var checkBox = $(this);
        var div = checkBox.parents(".part-form");
        var palletD = div.find("#pallet-drop");
        var parcel = div.find("#parcel-frm");
        var pallet = div.find("#pallet-frm");
        if (checkBox.is(":checked")) {
            parcel.addClass("hidden");
            pallet.removeClass("hidden");
            palletD.removeClass("hidden");
        } else {
            parcel.removeClass("hidden");
            pallet.addClass("hidden");
            palletD.addClass("hidden");
        }
    });
});